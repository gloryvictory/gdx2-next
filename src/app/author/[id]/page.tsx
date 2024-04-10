import { getAuthor, getAuthors } from "@/app/actions/getAuthor"
import { Card } from "antd"
import { Metadata } from "next";

interface Params {
    params: {
        id: string
    }
}

export const metadata: Metadata = {
  title: "Отчеты | Автор",
};

export default async function Page({params: {id}}: Params) {
    const authors = await getAuthor(id)

    return (   
        <div className="mt-20 m-4 flex items-center justify-center">
          <Card title="Автор"  hoverable bordered={true} style={{ width: 400 }}>
            <p>ID: <strong>{authors.data[0].id}</strong></p>
            <p>ФИО: <strong>{authors.data[0].author_name}</strong></p>
            <p>Дата обновления: <strong>{ new Date(authors.data[0].lastupdate).toLocaleDateString('ru-RU') }</strong></p>
          </Card>      
        </div>
    )
}

export async function generateStaticParams() {
  const authors = await getAuthors()

    return authors.data.map((author) => ({
      id: author.id.toString(),
    }))
}


