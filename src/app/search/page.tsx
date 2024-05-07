'use client'

import { useState, useEffect, Suspense } from 'react'
import { getReports } from '../actions/getAll'
import { IReport, IResultReport } from '../types'
// import Spinner from '@/components/Spinner/Spinner'
import { Flex, Input, Layout, Space, Spin } from 'antd'
// import Search from 'antd/es/transfer/search'
import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;
// import { useSearchParams } from "next/navigation";
// import { Suspense } from "react";
// import LoadingPosts from "./loading";
// import TheReport from "@/components/Report/TheReport";

// { searchParams,}: {searchParams: { q: string | undefined };}

export default function SearchReport() {
  const [data, setData] = useState<IResultReport>()
  const [isLoading, setLoading] = useState<boolean>(false)
  
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  
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
      setData(reports)
      setLoading(true)
    }

    getData()
  }, [])
  
  return (
    <>
    <div className="mt-20">

        {/* { !isLoading && <Spinner/>  } */}
        { !isLoading && <Spin tip="Получаем все отчеты..." size="large" fullscreen/>  }

        <Layout style={layoutStyle}>        
        {/* <Flex vertical gap={12}> */}
          <Search placeholder="input search text" onSearch={onSearch}  allowClear   />
        </Layout>
        {/* </Flex> */}

        <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10">
        {/* <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal top-24"> */}
        {
          data?.data.map((item: IReport ) => (                
          
            <li key={item.id} className="box-border rounded bg-slate-100 w-full pl-2 hover:bg-slate-700 hover:text-sky-400 hover:shadow-xl" > 
                <span className="font-mono" >{item.report_name}</span>
                {/* onClick={} */}
            </li>
          
        ))}
      </ol>
      

    </div>
    </>
  );
}
