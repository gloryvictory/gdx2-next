'use client'

import { useState, useEffect} from 'react'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Modal, message  } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { cfg } from '@/app/cfg/cfg';

type FieldType = {
  fio?: string;
  email?: string;
  message?: string;
};

export type IMessageProps = {
  open?:boolean 
  onOk: ()=>void;
  onCancel: ()=>void;
} 

export type IMessage = {
  fio: string;
  email: string;
  name_ru: string;
}

const MessageForm: React.FC<IMessageProps> = ({ open, onOk, onCancel }: IMessageProps) => {
  const [data, setData] = useState<IMessage>(null)
  const [isOk, setOk] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(open);
  const [messageApi, contextHolder] = message.useMessage();
  // const {host, port} = cfg
  const {gdx2_host_port, gdx2_api} = cfg
  const api_gdx2 = `http://${gdx2_host_port}/${gdx2_api}/report`
  
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: 'Не верный формат ${label}! Введите правильный!',
  },
};
/* eslint-enable no-template-curly-in-string */


  // POST request using fetch inside useEffect React hook
const postData = async () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  if (data){
  const response = await fetch(`${api_gdx2}/message`, requestOptions);
    if (response.ok)  {
      messageApi.info('Сообщение отправлено!');
      open=false;
      // router.reload();
    }    
  }
}

useEffect(() => {
  postData()
}, [data]);


// const handleCancel = () => {
//   setIsModalOpen(false);
//   open = false;
// };



const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
  const { fio, email, message }  = values;

  if(fio.length &&  email.includes('@') &&  message.length){
    const msg:IMessage = {
      "fio": fio,
      "email": email,
      "name_ru": message
    }
    setOk(true)
    setData(msg)
    setTimeout(() => {
      setIsModalOpen(false);
      open = false;
    }, 500);
  }else {
    setOk(false)
    open = false;
  }
  
};

// const onValuesChange: FormProps<FieldType>['onValuesChange'] = (errorInfo) => {
//   console.log('Changed:', errorInfo);
// };
// const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };
// onOk={handleOk} 

return (
    <>
    <Modal 
      title="Введите Ваши данные и пожелание" 
      open={isModalOpen} 
      onCancel={onCancel}
      onOk={onOk}  
      footer={(_, {  }) => (
        <>
         {/* disabled={!isOk} */}
          {/* <Button >Отмена</Button> */}
          {/* <CancelBtn  /> */}
          {/* <OkBtn /> */}
        </>
      )}
      width={600}
    >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          validateMessages={validateMessages}
          // onValuesChange={onValuesChange}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item<FieldType>
            label="Фамилия Имя Отчество"
            name="fio"
            rules={[{ required: true, message: 'Введите Фамилию Имя Отчество!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name={'email'}
            rules={[{ required: true,  type: 'email', }]}
            // message: 'Введите ваш email!'
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пожелание"
            name="message"
            rules={[{ required: true, message: 'Введите ваше пожелание не более 254 символов!' }]}
          >
            <TextArea showCount rows={7} placeholder="Максимум 253 символа" maxLength={253}   style={{ height: 120, resize: 'none' }}/>
            {/* <Input /> */}
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button  htmlType="submit" style={{ width: 200 }} >
              Сообщить
            </Button>
            {/* disabled={!isOk} */}
          </Form.Item>
        </Form>
        {isOk && <div className='text-center text-lime-500'>Отправлено!</div> }
    </Modal>

    </>
  );
}

export default MessageForm;
