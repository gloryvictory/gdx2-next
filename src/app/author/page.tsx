import { Tooltip } from "antd";
import { Metadata } from "next";
import Link from "next/link";

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

async function getData() {
  const response = await fetch("http://localhost:8001/api/v1/author/all", {
  next: {
      revalidate: 60,
  },
  });

  if (!response.ok) throw new Error("Unable to fetch authors!");

  return response.json();
}

export const metadata: Metadata = {
    title: "Отчеты | Авторы",
};

//  проверяем на совпадение регулярного выражения вида "Иванов И.И."
let sampleRegEx: RegExp = /^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]. ?[а-яА-ЯёЁa-zA-Z].$/;

export default async function Blog() {
    const authors : IAutorRes = await getData();
    console.log(authors);
    let className1 : string ="box-border rounded bg-slate-100 w-96 pl-2"
  return (
    <>
    <div className="mt-20">
      <h1>Авторы {authors.count}</h1>

      {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"> */}
      <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10  ">
        {authors.data.map((author: any) => (                
          <Tooltip key={author.id} placement="right" title={ 'Дата обновления: ' + new Date(author.lastupdate).toLocaleDateString('ru-RU')} >
            <li key={author.id} className={sampleRegEx.test(author.author_name) ? "box-border rounded bg-slate-100 w-96 pl-2" : "box-border rounded bg-slate-100 w-96 pl-2 border-solid border-2 border-fuchsia-600"} > 
                <Link href={`/author/${author.id}`} className="font-mono">{author.author_name}</Link>
            </li>
          </Tooltip>
        ))}
      </ol>
    </div>
    </>
  );
}
