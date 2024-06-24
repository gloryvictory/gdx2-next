'use client'

import { useState, useEffect} from 'react'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Modal, message  } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type FieldType = {
  fio?: string;
  email?: string;
  message?: string;
};

export type IMessageProps = {
  isOpen?:boolean
} 

export type IMessage = {
  fio: string;
  email: string;
  name_ru: string;
}

const MessageForm: React.FC<IMessageProps> = ({ isOpen }: IMessageProps) => {
  const [data, setData] = useState<IMessage>(null)
  const [isOk, setOk] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [messageApi, contextHolder] = message.useMessage();



  
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
    const response = await fetch('http://localhost:8001/api/v1/report/message', requestOptions);
    if (response.ok)  {
      messageApi.info('Сообщение отправлено!');
    }    
  }
}

useEffect(() => {
  postData()
}, [data]);


const handleCancel = () => {
  setIsModalOpen(false);
  isOpen = false;
};



const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
  const { fio, email, message }  = values;

  if(fio.length &&  email.includes('@') && email.endsWith('.ru') &&  message.length){
    const msg:IMessage = {
      "fio": fio,
      "email": email,
      "name_ru": message
    }
    setOk(true)
    setData(msg)
    setTimeout(() => {
      setIsModalOpen(false);
      isOpen = false;
    }, 500);
  }else {
    setOk(false)
    isOpen = false;
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
      onCancel={handleCancel}  
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
          // onValuesChange={onValuesChange}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateMessages={validateMessages}
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

          {/* {isOk ? {<Text type="success">Ant Design (success)</Text>} : null;} */}
        </Form>

        {isOk ? <div className='text-center text-lime-500'>Отправлено!</div> : null}
        {/* {isOk ? () =>{messageApi.info('Hello, Ant Design!')} : null} */}
        {/*  */}
        

      </Modal>

    </>
  );
}

export default MessageForm;
