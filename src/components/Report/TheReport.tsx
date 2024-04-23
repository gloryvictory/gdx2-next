'use client'

export const dynamic = 'force-dynamic'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { getReports, getReportsByQuery } from "@/app/actions/getAll";
import { IResultReport } from "@/app/types";
import { Tooltip } from "antd";

// export default async function TheReport({ q }: { q: string | undefined;}) {}
  

export default async function TheReport({ query }: { query: string | undefined;}) {
  const searchParams = useSearchParams()
  
  const q = query ||searchParams.get('q')
  let items : IResultReport = {count: 0, data: [],  msg: 'Не найдено'};

  if(q) { items  = await getReportsByQuery(q);} 
  else { items  = await getReports();}
  
  // const items: []

return (
  <Suspense>

  <div className="mt-20">
    <h1>Отчетов: <strong>{items.count}</strong> </h1>

    {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"> */}
    <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10 ">
      {items.data.map((item: any ) => (                
        <Tooltip key={item.id} placement="right" title={ 'Дата обновления: ' + new Date(item.lastupdate).toLocaleDateString('ru-RU')} >
          <li key={item.id} className="box-border rounded bg-slate-100 w-full pl-2 hover:bg-slate-700 hover:text-sky-400 hover:shadow-xl" > 
              <span className="font-mono">{item.report_name}</span>
          </li>
        </Tooltip>
      ))}
    </ol>
  </div>
  </Suspense>
);
}
