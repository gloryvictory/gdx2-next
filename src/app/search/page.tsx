'use client'

import { useState, useEffect, useCallback, Suspense, MouseEventHandler, DetailedHTMLProps, LiHTMLAttributes } from 'react'
import { getReports } from '../actions/getAll'
import { IReport, IResultReport } from '../types';
// import Spinner from '@/components/Spinner/Spinner'
import { Flex, Input, Layout, Space, Spin } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

// import Search from 'antd/es/transfer/search'
import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;
import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta'
import { TheDrawer } from './TheDrawer'

// import { useSearchParams } from "next/navigation";
// import { Suspense } from "react";
// import LoadingPosts from "./loading";
// import TheReport from "@/components/Report/TheReport";

// { searchParams,}: {searchParams: { q: string | undefined };}

export default function SearchReport() {
  // const [data, setData] = useState<IResultReport>()
  const [inputValue, setInputValue] = useState<string>("")
  const [initialList, setInitialList] = useState<IReport[]>()
  const [filteredList, setFilteredList] = useState<IReport[]>()
  const [data, setData] = useState<IReport[]>()

  const [isLoading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false);
  const [curentItem, setCurentItem] = useState<IReport>();

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => 
  {
    console.log(info?.source, value);
    setInputValue(value)
  }
  
  const layoutStyle = {
    // borderRadius: 8,
    // overflow: 'hidden',
    marginTop: '16px',
    marginBottom: '16px',
    marginLeft: '26px',
    // position: 'fixed',
    // position: 'fixed',
    zIndex: '1',
    width: 'calc(100% - 30px)',
    // width: 'calc(100% - 8px)',
    // maxWidth: 'calc(100% - 8px)',
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(false)
      const reports = await getReports()
      // setData(reports)
      setInitialList(reports?.data)
      setLoading(true)
    }

    getData()
  }, [])
  
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  
// Search Handler
const searchHandler = useCallback(() => {
  // setLoading(true)
  const filteredData = initialList?.filter((report: IReport) => {
    return report.report_name.toLowerCase().includes(inputValue.toLowerCase())
  })
  setFilteredList(filteredData)
  inputValue?.length? setData(filteredList) : setData(initialList)
  // setLoading(false)
}, [initialList, inputValue, filteredList])

// EFFECT: Search Handler
useEffect(() => {
  // Debounce search handler
  const timer = setTimeout(() => {
    searchHandler()
  }, 500)

  // Cleanup
  return () => {
    clearTimeout(timer)
    
  }
}, [searchHandler])


  return (
    <>
    <div className="mt-20">

        {/* { !isLoading && <Spinner/>  } */}
        { !isLoading && <Spin tip="Получаем все отчеты..." size="large" fullscreen/>  }

        <div className="relative mt-8 mb-5">
          <Layout style={layoutStyle}>        
          {/* <Flex vertical gap={12}> */}
            <Search placeholder="ищем в названии отчета" onSearch={onSearch}  allowClear   />
          </Layout>
        </div>
        
        Найдено: <strong>{data?.length}</strong>
        {/* </Flex> */}
        <Row gutter={16}>
        {
        // const data: IReport[] = filteredList?.length? filteredList : initialList
        data?.map((item: IReport ) => ( 
          // const rgf = item.rgf.length? `rgf: ${item.rgf}` : '',

            <Col span={8}  key={item.id}>
              <Card
                hoverable
                type="inner"
                style={{  margin: '5px' }}
                size="small"
                key={item.id}
                title={item.id}
                extra={<a href="#">More</a>}
                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                actions={[
                  `№ РГФ: ${item.rgf.length? `${item.rgf}` : ''}`,
                  `${item.tgf.length? `${item.tgf}` : ''}`,                  
                  <EllipsisOutlined key="ellipsis" />,
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



 {/* <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal top-24"> */}

 
//  <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10">
//  {
//    data?.data.map((item: IReport ) => (                
//      <li key={item.id} className="box-border rounded bg-slate-100 w-full pl-2 hover:bg-slate-700 hover:text-sky-400 hover:shadow-xl" onClick={onReportClick}> 
//          <span className="font-mono" >{item.report_name}</span>
//          {/* onClick={} */}
//      </li>          
//  ))}
// </ol>
