import { Tooltip } from "antd";
import { Metadata } from "next";
import { cfg } from "../cfg/cfg";

export interface IAutorRes {
    msg: string
    count: number
    data: string[]
}
export interface IData {
  lastupdate: string
  id: number
  author_name: string
}

const {host, port} = cfg


async function getData() {
  const url = `http://${host}:${port}/api/v1/report/author/`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export const metadata: Metadata = {
    title: "Отчеты | Авторы",
};

//  проверяем на совпадение регулярного выражения вида "Иванов И.И."
let sampleRegEx: RegExp = /^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]. ?[а-яА-ЯёЁa-zA-Z].$/;

export default async function Blog() {
    const authors : IAutorRes = await getData();
    // console.log(authors);
  return (
    <>
    <div className="mt-20">
      <h1>Всего авторов: <strong>{authors.count}</strong> </h1>

      {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"> */}
      <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10 ">
        {authors.data.map((author: any ) => (                
          <Tooltip key={author.id} placement="right" title={ 'Дата обновления: ' + new Date(author.lastupdate).toLocaleDateString('ru-RU')} >
            <li key={author.id} className={sampleRegEx.test(author.author_name) ? "box-border rounded bg-slate-100 w-96 pl-2 hover:bg-slate-700 hover:text-sky-400" : "box-border rounded bg-slate-100 w-96 pl-2 border-dashed border-2 border-fuchsia-600 hover:bg-slate-700 hover:text-sky-400"} > 
                <span className="font-mono">{author.author_name}</span>
            </li>
          </Tooltip>
        ))}
      </ol>
    </div>
    </>
  );
}
