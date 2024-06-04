'use client'

import { useState, useEffect, useCallback, Suspense, MouseEventHandler, DetailedHTMLProps, LiHTMLAttributes } from 'react'
import { getReportsByQuery } from '../actions/getAll'
import { IReport, IResultReport } from '../types';
import { Affix, Input, Spin  } from 'antd'

import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;
import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta'
import { TheDrawer } from '@/components/TheDrawer/TheDrawer';

export default function SearchReport() {
  // const [data, setData] = useState<IResultReport>()
  const [inputValue, setInputValue] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [initialList, setInitialList] = useState<IReport[]>()
  const [data, setData] = useState<IReport[]>()

  const [isLoading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false);
  const [curentItem, setCurentItem] = useState<IReport>();

  
  
  
  const layoutStyle = {
    marginTop: '16px',
    marginBottom: '16px',
    marginLeft: '26px',
    zIndex: '1',
    width: 'calc(100% - 30px)',
  };

  const getData = async (query: string) => {
    setLoading(true)
    const reports = await getReportsByQuery(query)
    // setData(reports)
    setInitialList(reports?.data)
    setLoading(false)
  }

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => 
  {
    // console.log(info?.source, value);
    // console.log(info);
    // console.log(`isLoading : ${isLoading}`);
    
    setInputValue(value)

    if(value.length > 3){
      console.log(`БУдем искать: ${value}`);
      getData(value)
      setMessage(`По запросу: `)
    }else{
      setInitialList([])
      setMessage('Введите поисковый запрос более 3-х символов')
    }
  }
  
  
  
  // useEffect(() => {
  //   getData()
  // }, [inputValue])
  
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className="mt-20">

        {/* { !isLoading && <Spinner/>  } */}
        { isLoading && <Spin tip="Получаем все отчеты..." size="large" fullscreen/>  } 
        <Affix offsetTop={80} className='ml-2'>
          <div>
            <Search placeholder="ищем в названии отчета" onSearch={onSearch} allowClear />
            <div className='bg-slate-100 rounded-md p-2 text-center text-sm'>
              {message} <strong>{inputValue.length > 3 ? inputValue: ""}</strong> Найдено: <strong>{initialList?.length }</strong> отчетов
            </div>
          </div>
        </Affix>  

        <Row gutter={16}>
        {
        // const data: IReport[] = filteredList?.length? filteredList : initialList
        // const data: IReport[] = initialList
        initialList?.length && initialList?.map((item: IReport ) => ( 
            <Col span={8}  key={item.id}>
              <Card
                hoverable
                type="inner"
                style={{  margin: '5px' }}
                size="small"
                key={item.id}
                title={item.id}
                actions={[
                  `№ РГФ: ${item.rgf.length? `${item.rgf}` : ''}`,
                  `${item.tgf.length? `${item.tgf}` : ''}`,                  
                  `Год: ${item.year_str.length? `${item.year_str}` : ''}`,,
                ]}
                onClick={()=>{setCurentItem(item);showDrawer()}}
              >
                <Meta title={item.author_name} description={item.report_name} />
              </Card>
            </Col>
            

        ))}
        </Row>
        <TheDrawer open={open} onClose={onClose} showDrawer={showDrawer} item={curentItem}/> 
      

    </div>
    </>
  );
}
