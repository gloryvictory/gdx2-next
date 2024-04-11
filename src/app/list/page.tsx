import { Tooltip } from "antd";
import { Metadata } from "next";
import Link from "next/link";
import { cfg } from "../cfg/cfg";

export interface IResult {
    msg: string
    count: number
    data: IData[]
}
export interface IData {
  lastupdate: string
  id: number
  list_name: string
}

const {host, port} = cfg


async function getData() {
  const url = `http://${host}:${port}/api/v1/report/list`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export const metadata: Metadata = {
    title: "Отчеты | Листы",
};

//  проверяем на совпадение регулярного выражения вида "Иванов И.И."
let sampleRegEx: RegExp = /^[A-Z]-\d\d/;

export default async function List() {
    const lists : IResult = await getData();
    // console.log(authors);
  return (
    <>
    <div className="mt-20">
      <h1>Всего Листов: <strong>{lists.count}</strong> </h1>

      {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"> */}
      <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10 ">
        {lists.data.map((list: any ) => (                
          <Tooltip key={list.id} placement="right" title={ 'Дата обновления: ' + new Date(list.lastupdate).toLocaleDateString('ru-RU')} >
            <li key={list.id} className={sampleRegEx.test(list.list_name) ? "box-border rounded bg-slate-100 w-96 pl-2 hover:bg-slate-700 hover:text-sky-400" : "box-border rounded bg-slate-100 w-96 pl-2 border-dashed border-2 border-fuchsia-600 hover:bg-slate-700 hover:text-sky-400"}> 
                <span className="font-mono">{list.list_name}</span>
            </li>
          </Tooltip>
        ))}
      </ol>
    </div>
    </>
  );
}
