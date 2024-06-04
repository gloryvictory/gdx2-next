'use client'

import { useState, useEffect} from 'react'
import { Spin, Tooltip } from "antd";
import { IResult, IResultReport } from "../types";
import Metadata from '@/components/Metadata/Metadata';
import { getReports } from "../actions/getAll";



// export const metadata: Metadata = {
//     title: "Отчеты | Все отчеты",
// };

//  проверяем на совпадение регулярного выражения вида "Иванов И.И."
// let sampleRegEx: RegExp = /^[A-Z]-\d\d/;
// sampleRegEx.test(list.name_ru) ? "box-border rounded bg-slate-100 w-96 pl-2 hover:bg-slate-700 hover:text-sky-400" : "box-border rounded bg-slate-100 w-96 pl-2 border-dashed border-2 border-fuchsia-600 hover:bg-slate-700 hover:text-sky-400"}
export default function GetReport() {
    // const items : IResultReport = await getReports();
    const title: string  = "Отчеты  | Отчеты"
    const [data, setData] = useState<IResultReport>()
    const [isLoading, setLoading] = useState<boolean>(false)
  
    const getData = async () => {
      setLoading(true)
      const items : IResultReport = await getReports()
      setData(items)
      setLoading(false)
    }
    
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    <Metadata seoTitle={title} seoDescription={title} />
    { isLoading && <Spin tip="Получаем все Отчеты..." size="large" fullscreen/>  } 

    <div className="mt-20">
      <h1>Отчетов: <strong>{data?.count}</strong> </h1>

      {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"> */}
      <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10 ">
        {data?.data?.map((item: any ) => (                
          <Tooltip key={item.id} placement="right" title={ 'Дата обновления: ' + new Date(item.lastupdate).toLocaleDateString('ru-RU')} >
            <li key={item.id} className="box-border rounded bg-slate-100 w-full pl-2 hover:bg-slate-700 hover:text-sky-400 hover:shadow-xl" > 
                <span className="font-mono">{item.report_name}</span>
            </li>
          </Tooltip>
        ))}
      </ol>
    </div>
    </>
  );
}
