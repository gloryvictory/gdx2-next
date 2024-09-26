import { cfg } from "../cfg/cfg"
import { ICount } from "../types";


const {gdx2_host_port} = cfg
const api_report = `api/v1/report`
const api_gdx2 = `http://${gdx2_host_port}/${api_report}`

export  async function getAuthorCount(): Promise<ICount> {
  const url = `${api_gdx2}/author/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export  async function getReportCount(): Promise<ICount> {
  const url = `${api_gdx2}/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getListCount(): Promise<ICount> {
  const url = `${api_gdx2}/list/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getSubrfCount(): Promise<ICount> {
  const url = `${api_gdx2}/subrf/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getOrgCount(): Promise<ICount> {
  const url = `${api_gdx2}/org/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getAreaCount(): Promise<ICount> {
  const url = `${api_gdx2}/area/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getFieldCount(): Promise<ICount> {
  const url = `${api_gdx2}/field/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getLuCount(): Promise<ICount> {
  const url = `${api_gdx2}/lu/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getPiCount(): Promise<ICount> {
  const url = `${api_gdx2}/pi/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getVidRabCount(): Promise<ICount> {
  const url = `${api_gdx2}/vid_rab/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// export  async function getCountByObj(obj: string): Promise<ICount> {
//   const url = `${api_gdx2}/${obj}/count`
//   console.log(url)
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
