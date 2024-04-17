export interface ICount {
  msg: string
  count: number
}

export interface IResult {
  msg: string
  count: number
  data: IData[]
}
export interface IData {
lastupdate: string
id: number
name_ru: string
}

export interface IResultReport {
  msg: string
  count: number
  data: IReport[]
}

export interface IReport {
  id: number
  report_name: string
  author_name: string
  rgf: string
  tgf_hmao: string
  tgf_ynao: string
  tgf_kras: string
  tgf_ekat: string
  tgf_omsk: string
  tgf_novo: string
  tgf_tomsk: string
  tgf_more: string
  tgf_tmn: string
  tgf_kurgan: string
  tgf: string
  subrf_name: string
  areaoil: string
  field: string
  pi_name: string 
  territory_name: string
  fin_name: string
  is_alive: boolean
  org_name: string
  list_name: string
  zsniigg_report: string
  part_name: string
  vid_rab: string
  inf_report: string
  folder_root: string
  folder_name: string
  folder_short: string
  folder_link: string
  year_int: number
  year_str: string
  comments: string
  lu: string
  lat: number
  lon: number
  lastupdate: string
  report_fts: string
}
