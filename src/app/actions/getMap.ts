import { cfg } from "../cfg/cfg"
import { ICountOnMap } from '../types';

const {gdx2_host_port, gdx2_api} = cfg
const api_report = `api/v1`
// const api_gdx2 = `http://${gdx2_map_host_port}/${api_report}`
const api_gdx2 = `http://${gdx2_host_port}/${gdx2_api}`

//  http://localhost:8002/api/v1/sta/count

// export function getAuthor(id: number): Promise<FilmResponse> {
//   return fetch(`https://swapi.tech/api/films/${id}`).then(res => res.json())
// }

export  async function  getCountOnMap(rgf: string): Promise<ICountOnMap> {
  const  result: ICountOnMap = {
    sta_count: 0,
    stl_count: 0,
    stp_count: 0,
  }
  
  // const sta_count: number = 0;
  // const stl_count: number = 0;
  // const stp_count: number = 0;
  console.log(rgf)

  const url_sta = `${api_gdx2}/sta/rosg/count/${rgf}`
  console.log(url_sta)
  const sta_res = await fetch(url_sta, { next: { revalidate: cfg.delay,},});
  if (!sta_res.ok) { throw new Error(`Failed to fetch data from ${url_sta}`); }
  const sta_json = await sta_res.json();
  
  const url_stl = `${api_gdx2}/stl/rosg/count/${rgf}`
  console.log(url_stl)
  const stl_res = await fetch(url_stl, { next: { revalidate: cfg.delay,},});
  if (!stl_res.ok) { throw new Error(`Failed to fetch data from ${url_stl}`); }
  const stl_json = await stl_res.json();
  
  const url_stp = `${api_gdx2}/stp/rosg/count/${rgf}`
  console.log(url_stp)
  const stp_res = await fetch(url_stp, { next: { revalidate: cfg.delay,},});
  if (!stp_res.ok) { throw new Error(`Failed to fetch data from ${url_stp}`); }
  const stp_json = await stp_res.json();

  result.sta_count = sta_json.count;  
  result.stl_count = stl_json.count;  
  result.stp_count = stp_json.count;  
  // sta_str['count'];

  return result;
}
