import { cfg } from "../cfg/cfg"

export interface IResult {
  msg: string
  count: number
  data: IData[]
}

export interface IData {
  lastupdate: string
  id: number
  author_name: string
}


const host = process.env.HOST_BCK || "localhost" 
const port = process.env.PORT_BCK || "8001" 


// export function getAuthor(id: number): Promise<FilmResponse> {
//   return fetch(`https://swapi.tech/api/films/${id}`).then(res => res.json())
// }

export  async function  getAuthor(id: string): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/author/${id}`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export  async function  getAuthors(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/author/`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
