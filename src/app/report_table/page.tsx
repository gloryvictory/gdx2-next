// 'use client'

// import { Tooltip } from "antd";
import { Metadata } from "next";
import { IResultReport } from "../types";
import {  getReports } from "../actions/getAll";

import{ Table } from "antd";



export const metadata: Metadata = {
    title: "Отчеты | Отчеты таблица",
};

//  проверяем на совпадение регулярного выражения вида "Иванов И.И."
// let sampleRegEx: RegExp = /^[A-Z]-\d\d/;
// sampleRegEx.test(list.name_ru) ? "box-border rounded bg-slate-100 w-96 pl-2 hover:bg-slate-700 hover:text-sky-400" : "box-border rounded bg-slate-100 w-96 pl-2 border-dashed border-2 border-fuchsia-600 hover:bg-slate-700 hover:text-sky-400"}
export default async function getReportTable() {
    const items : IResultReport = await getReports();
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Отчет',
        dataIndex: 'report_name',
        key: 'report_name',
      },
      {
        title: 'Авторы',
        dataIndex: 'author_name',
        key: 'author_name',
      },
      {
        title: 'Листы карты',
        dataIndex: 'list_name',
        key: 'list_name',
      },
      {
        title: 'Год',
        dataIndex: 'year_str',
        key: 'year_str',
      },
      {
        title: 'РГФ',
        dataIndex: 'rgf',
        key: 'rgf',
      },
      {
        title: 'ТГФ',
        dataIndex: 'tgf',
        key: 'tgf',
      },
      {
        title: 'tgf_tmn',
        dataIndex: 'tgf_tmn',
        key: 'tgf_tmn',
      },
      {
        title: 'inf_report',
        dataIndex: 'inf_report',
        key: 'inf_report',
      },
      {
        title: 'lastupdate',
        dataIndex: 'lastupdate',
        key: 'lastupdate',
        // render: (text:string) => new Date(text).toLocaleDateString('ru-RU'),
      },
    ];


  return (
    <>
    <div className="mt-20 w-full">
      <h1>Отчетов: <strong>{items.count}</strong> </h1>
      <Table dataSource={items.data} columns={columns} />


      {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
      <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10 ">
        {items.data.map((item: any ) => (                
          <Tooltip key={item.id} placement="right" title={ 'Дата обновления: ' + new Date(item.lastupdate).toLocaleDateString('ru-RU')} >
            <li key={item.id} className="box-border rounded bg-slate-100 w-full pl-2 hover:bg-slate-700 hover:text-sky-400 hover:shadow-xl" > 
                <span className="font-mono">{item.report_name}</span>
            </li>
          </Tooltip>
        ))}
      </ol> */}
    </div>
    </>
  );
}
