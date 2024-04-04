import { Metadata } from "next";
import Link from "next/link";

export interface IAutorRes {
    msg: string
    count: number
    data: string[]
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

export default async function Blog() {
    const authors : IAutorRes = await getData();
    console.log(authors);

  return (
    <>
    <div className="mt-20">
      <h1>Авторы {authors.count}</h1>

      <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
        {authors.data.map((author: any) => (
          <li key={author.id}>
            <Link href={`/author/${author.id}`}>{author.author_name}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
