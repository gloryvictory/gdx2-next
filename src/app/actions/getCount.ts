import { cfg } from "../cfg/cfg"

export interface ICount {
  msg: string
  count: number
}

const host = process.env.HOST_BCK || "localhost" 
const port = process.env.PORT_BCK || "8001" 

export  async function getAuthorCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/author/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export  async function getReportCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getListCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/list/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getSubrfCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/subrf/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getOrgCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/org/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getAreaCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/area/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getFieldCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/field/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getLuCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/lu/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getPiCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/pi/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  async function getVidRabCount(): Promise<ICount> {
  const url = `http://${host}:${port}/api/v1/report/vid_rab/count`
  console.log(url)
  const res = await fetch(url, { next: { revalidate: cfg.delay,},});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// export  async function getCountByObj(obj: string): Promise<ICount> {
//   const url = `http://${host}:${port}/api/v1/report/${obj}/count`
//   console.log(url)
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
