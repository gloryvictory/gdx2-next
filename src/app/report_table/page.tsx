// 'use client'

// import { Tooltip } from "antd";
// import { Metadata } from "next";
import { IResultReport } from "../types";
import {  getReports } from "../actions/getAll";

import{ Table } from "antd";
// import "antd.min.css"; // add this
// import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
// export * from "antd";
// import "antd/dist/reset.css";


// export const metadata: Metadata = {
//     title: "Отчеты | Отчеты таблица",
// };

//  проверяем на совпадение регулярного выражения вида "Иванов И.И."
// let sampleRegEx: RegExp = /^[A-Z]-\d\d/;
// sampleRegEx.test(list.name_ru) ? "box-border rounded bg-slate-100 w-96 pl-2 hover:bg-slate-700 hover:text-sky-400" : "box-border rounded bg-slate-100 w-96 pl-2 border-dashed border-2 border-fuchsia-600 hover:bg-slate-700 hover:text-sky-400"}
export default async function getReportTable() {
    const items : IResultReport = await getReports();
    const columns = [
      {
        title: '№',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Название Отчета',
        dataIndex: 'report_name',
        key: 'report_name',
      },
      {
        title: 'Авторы',
        dataIndex: 'author_name',
        key: 'author_name',
      },
      {
        title: 'Год',
        dataIndex: 'year_str',
        key: 'year_str',
      },
      {
        title: 'Листы карты',
        dataIndex: 'list_name',
        key: 'list_name',
      },
      {
        title: 'Инв.№ РГФ',
        dataIndex: 'rgf',
        key: 'rgf',
      },
      {
        title: 'ТГФ',
        dataIndex: 'tgf_tmn',
        key: 'tgf_tmn',
      },
      {
        title: 'ТГФ',
        dataIndex: 'tgf',
        key: 'tgf',
      },
      {
        title: 'Субъект РФ',
        dataIndex: 'subrf_name',
        key: 'subrf_name',
      },
      {
        title: 'Организация',
        dataIndex: 'org_name',
        key: 'org_name',
      },
      {
        title: 'Вид работ',
        dataIndex: 'vid_rab',
        key: 'vid_rab',
      },
      {
        title: 'ПИ',
        dataIndex: 'pi_name',
        key: 'pi_name',
      },
      // {
      //   title: 'Инв.№ ХМТГФ',
      //   dataIndex: 'tgf_hmao',
      //   key: 'tgf_hmao',
      // },
      // {
      //   title: 'Инв.№ ЯНТГФ',
      //   dataIndex: 'tgf_ynao',
      //   key: 'tgf_ynao',
      // },
      // {
      //   title: 'Инв.№ КраснТГФ',
      //   dataIndex: 'tgf_kras',
      //   key: 'tgf_kras',
      // },
      // {
      //   title: 'Инв.№ ЕкатерТГФ',
      //   dataIndex: 'tgf_ekat',
      //   key: 'tgf_ekat',
      // },
      // {
      //   title: 'Инв.№ ОмскТГФ',
      //   dataIndex: 'tgf_omsk',
      //   key: 'tgf_omsk',
      // },
      // {
      //   title: 'Инв.№ НовосибТГФ',
      //   dataIndex: 'tgf_novo',
      //   key: 'tgf_novo',
      // },
      // {
      //   title: 'Инв.№ ТомскТГФ',
      //   dataIndex: 'tgf_tomsk',
      //   key: 'tgf_tomsk',
      // },
      // {
      //   title: 'Инв.№ МорскойТГФ',
      //   dataIndex: 'tgf_more',
      //   key: 'tgf_more',
      // },
      
      // {
      //   title: 'Инв.№ КурганТГФ',
      //   dataIndex: 'tgf_kurgan',
      //   key: 'tgf_kurgan',
      // },
      
      // {
      //   title: 'inf_report',
      //   dataIndex: 'inf_report',
      //   key: 'inf_report',
      // },
      // {
      //   title: 'lastupdate',
      //   dataIndex: 'lastupdate',
      //   key: 'lastupdate',
      //   // render: (text:string) => new Date(text).toLocaleDateString('ru-RU'),
      // },
    ];


  return (
    <>
    <div className="mt-20 w-screen">
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
