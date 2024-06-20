import { cfg } from "../cfg/cfg"
import { IResult, IResultReport } from "../types";

const {host, port} = cfg

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
  // console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});
  if (!res.ok) {throw new Error("Failed to fetch data");}
  return res.json();
}


export async function getLists(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/list`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getSubrfs(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/subrf`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getOrgs(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/org`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getAreas(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/area`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getFields(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/field`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getLus(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/lu`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getPis(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/pi`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}


export async function getVidRabs(): Promise<IResult> {
  const url = `http://${host}:${port}/api/v1/report/vid_rab`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getReports(): Promise<IResultReport> {
  const url = `http://${host}:${port}/api/v1/report/all`
  const response = await fetch( url );
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}


export async function getReportsByQuery(query: string| undefined): Promise<IResultReport> {
  const url = `http://${host}:${port}/api/v1/report/search/${query}`
  const response = await fetch( url );
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getMessages(): Promise<IResult>  {
  const url = `http://${host}:${port}/api/v1/report/message`
  const response = await fetch( url );
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}
