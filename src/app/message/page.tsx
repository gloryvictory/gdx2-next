'use client'

import { useState, useEffect} from 'react'
import { IResult } from "../types";
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Modal  } from 'antd';


export type IMessageProps = {
  isOpen?:boolean
} 

export const Message: React.FC = ({ isOpen }: IMessageProps) => {
// export default function Message<IMessageProps>(isOpen:true) {
  const title: string  = "Отчеты  | Сообщения"
  const [data, setData] = useState<IResult>()
  const [isLoading, setLoading] = useState<boolean>(false)

  const getData = async () => {
    // setLoading(true)

    // setData(items)
    // setLoading(false)
  }
  
useEffect(() => {
  getData()
}, [])

const [isModalOpen, setIsModalOpen] = useState(true);

const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

type FieldType = {
  fio?: string;
  email?: string;
  message?: string;
};

// const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
//   console.log('Success:', values);

// };

// const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };




  return (
    <>
    <Modal title="Basic Modal" open={isOpen} onOk={handleOk} onCancel={handleCancel}  width={600}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          >
          <Form.Item<FieldType>
            label="Фамилия Имя Отчество"
            name="fio"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Сообщение"
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input />
          </Form.Item>

          
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Сообщить
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </>
  );
}
