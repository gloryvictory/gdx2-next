'use client'

import { useState, useEffect} from 'react'
import { IResult } from "../types";
import React from 'react';
// import type { FormProps } from 'antd';
import { Button, Spin, Tooltip  } from 'antd';
import { getMessages } from '../actions/getAll';

import Metadata from '@/components/Metadata/Metadata';
import MessageForm from '@/components/MessageForm/MessageForm';
// import {  useRouter } from 'next/navigation';
import Author from '../author/page';


const Message: React.FC = () => {
  const title: string  = "Отчеты  | Сообщения"
  const [data, setData] = useState<IResult>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  // const [isOk, setOk] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const router = useRouter()

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getData = async () => {
    setLoading(true)
    const items: IResult = await getMessages() 
    setData(items)
    setLoading(false)
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  // useEffect(() => {
  //   if(isModalOpen) {
  //     router.reload(); 
  //   }
  // }, [isModalOpen])

  return (
    <>
    
    <Metadata seoTitle={title} seoDescription={title} />
    <div className="mt-20">
      { isLoading && <Spin tip="Получаем все площади..." size="large" fullscreen/>  } 
      <div className="container py-1 px-1 mx-0 min-w-full">
        <div className="flex justify-center">
          
          <Button 
            className="min-w-full"
            onClick={()=>{setIsModalOpen(true); console.log(`isModalOpen: ${isModalOpen}`) } }
            disabled={isModalOpen}
          >
            Добавить свое Пожелание
          </Button>
        </div>
      </div>
      
      {isModalOpen ? <MessageForm open={isModalOpen} onOk={handleOk} onCancel={handleCancel}   /> : null}
      

      <div className="mt-2">
        <h1>Пожеланий: <strong>{data?.count}</strong> </h1>

        {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"> */}
        <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10 ">
          {data && data?.data.map((item: any ) => (                
            <Tooltip key={item.id} placement="right" title={ 'Дата: ' + new Date(item.lastupdate).toLocaleDateString('ru-RU') + " ФИО: " + ` ${item.fio}` + " Почта: " + ` ${item.email}`} >
              <li key={item.id} className={ "box-border rounded bg-slate-100 w-96 pl-2 hover:bg-slate-700 hover:text-sky-400"} > 
                  <span className="font-mono">{item.name_ru}</span>
              </li>
            </Tooltip>
          ))}
        </ol>
      </div>


    </div>
    


    </>
  );
}

export default Message;
// type="primary"
