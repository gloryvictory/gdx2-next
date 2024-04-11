import { Tooltip } from "antd";
import { Metadata } from "next";
import { IResult } from "../types";
import {  getSubrfs } from "../actions/getAll";



export const metadata: Metadata = {
    title: "Отчеты | Листы",
};

//  проверяем на совпадение регулярного выражения вида "Иванов И.И."
// let sampleRegEx: RegExp = /^[A-Z]-\d\d/;
// sampleRegEx.test(list.name_ru) ? "box-border rounded bg-slate-100 w-96 pl-2 hover:bg-slate-700 hover:text-sky-400" : "box-border rounded bg-slate-100 w-96 pl-2 border-dashed border-2 border-fuchsia-600 hover:bg-slate-700 hover:text-sky-400"}
export default async function getSubrf() {
    const items : IResult = await getSubrfs();

  return (
    <>
    <div className="mt-20">
      <h1>Всего Субъектов РФ: <strong>{items.count}</strong> </h1>

      {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"> */}
      <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10 ">
        {items.data.map((item: any ) => (                
          <Tooltip key={item.id} placement="right" title={ 'Дата обновления: ' + new Date(item.lastupdate).toLocaleDateString('ru-RU')} >
            <li key={item.id} className="box-border rounded bg-slate-100 w-96 pl-2 hover:bg-slate-700 hover:text-sky-400" > 
                <span className="font-mono">{item.name_ru}</span>
            </li>
          </Tooltip>
        ))}
      </ol>
    </div>
    </>
  );
}
