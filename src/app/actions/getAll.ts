import { cfg } from "../cfg/cfg"
import { IResult, IResultReport } from "../types";

const {gdx2_host_port} = cfg
const api_report = `api/v1/report`
const api_gdx2 = `http://${gdx2_host_port}/${api_report}`

// export function getAuthor(id: number): Promise<FilmResponse> {
//   return fetch(`https://swapi.tech/api/films/${id}`).then(res => res.json())
// }

export  async function  getAuthor(id: string): Promise<IResult> {
  const url = `${api_gdx2}/author/${id}`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export  async function  getAuthors(): Promise<IResult> {
  const url = `${api_gdx2}/author/`
  // console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});
  if (!res.ok) {throw new Error("Failed to fetch data");}
  return res.json();
}


export async function getLists(): Promise<IResult> {
  const url = `${api_gdx2}/list`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getSubrfs(): Promise<IResult> {
  const url = `${api_gdx2}/subrf`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getOrgs(): Promise<IResult> {
  const url = `${api_gdx2}/org`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getAreas(): Promise<IResult> {
  const url = `${api_gdx2}/area`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getFields(): Promise<IResult> {
  const url = `${api_gdx2}/field`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getLus(): Promise<IResult> {
  const url = `${api_gdx2}/lu`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getPis(): Promise<IResult> {
  const url = `${api_gdx2}/pi`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}


export async function getVidRabs(): Promise<IResult> {
  const url = `${api_gdx2}/vid_rab`
  const response = await fetch( url, { next: { revalidate: cfg.delay,},});
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getReports(): Promise<IResultReport> {
  const url = `${api_gdx2}/all`
  const response = await fetch( url );
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}


export async function getReportsByQuery(query: string| undefined): Promise<IResultReport> {
  const url = `${api_gdx2}/search/${query}`
  const response = await fetch( url );
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}

export async function getMessages(): Promise<IResult>  {
  const url = `${api_gdx2}/message`
  const response = await fetch( url );
  if (!response.ok) throw new Error(`Unable to fetch ${url}!`);
  return response.json();
}
