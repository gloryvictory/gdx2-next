'use client'

import { useState, useEffect} from 'react'
import { IResult } from "../types";
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

const Message: React.FC = ({ isOpen = true}: IMessageProps) => {
// export default function Message<IMessageProps>(isOpen:true) {
  const title: string  = "Отчеты  | Сообщения"
  const [data, setData] = useState<IMessage>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isOk, setOk] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const [messageApi, contextHolder] = message.useMessage();


//   const getData = async () => {
//     // setLoading(true)

//     // setData(items)
//     // setLoading(false)
//   }
  
// useEffect(() => {
//   getData()
// }, [])
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
      // const data = await response.json();
    }    
      // fetch('http://localhost:8001/api/v1/report/message', requestOptions)
      // .then(response => response.json())
      // .then(()=>console.log(response.));
  }
}

useEffect(() => {
  postData()
}, [data]);



const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};



const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
  const { fio, email, message }  = values;

  if(fio &&  email  &&  message){
    const msg:IMessage = {
      "fio": fio,
      "email": email,
      "name_ru": message
    }
    setOk(true)
    setData(msg)  
  }
  
};

const onValuesChange: FormProps<FieldType>['onValuesChange'] = (errorInfo) => {
  console.log('Changed:', errorInfo);
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



// onOk={handleOk} 
  return (
    <>
    <Modal 
      title="Введите Ваши данные и пожелание" 
      open={isModalOpen} 
      onCancel={handleCancel}  
      footer={(_, {  }) => (
        <>
          <Button disabled={!isOk} >Отмена</Button>
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
          onValuesChange={onValuesChange}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
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
            name="email"
            rules={[{ required: true, message: 'Введите ваш email!' }]}
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
            <Button  htmlType="submit" style={{ width: 200 }} disabled={!isOk}>
              Сообщить
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </>
  );
}

export default Message;
// type="primary"
