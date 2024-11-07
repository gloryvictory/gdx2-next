import { MouseEventHandler, useEffect, useState } from "react";
import { ICountOnMap, IReport } from "../types";
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta'
import { getCountOnMap } from "../actions/getMap";


export interface ReportCardProps  {
  onClick?: MouseEventHandler<HTMLDivElement>;
  item: IReport;
}



export const ReportCard = (report_props: ReportCardProps ) => {

  const {item, onClick } = report_props;
  // const [sta, setSta] = useState<string>("")
  // const [stl, setStl] = useState<string>("")
  // const [stp, setStp] = useState<string>("")
  // const [isLoading, setLoading] = useState<boolean>(false)

  // const getMapData = async (rgf: string) => {
    // setLoading(true)
    // const map_items : ICountOnMap = await getCountOnMap(rgf)
    // setSta(map_items.sta_count.toString())
    // setStl(map_items.stl_count.toString())
    // setStp(map_items.stp_count.toString())
    // console.log(map_items)
    // setMapData(map_items)
    // setLoading(false)
  // }

  // useEffect(() => {
  //   getMapData(item?.rgf)
  // }, [item?.rgf])


  return (

    <Card
    hoverable
    type="inner"
    style={{  margin: '5px' }}
    size="small"
    key={item.id}
    title={item.id}
    actions={[
      `№ РГФ: ${item.rgf.length ? `${item.rgf}` : ''}`,
      `${item.tgf.length ? `${item.tgf}` : ''}`,                  
      `Год: ${item.year_str.length ? `${item.year_str}` : ''}`,
      // `P: ${item.rgf.length ? `${sta}` : ''}`,
      // `L: ${item.rgf.length ? `${stl}` : ''}`,
      // `Plg: ${item.rgf.length ? `${stp}` : ''}`,
      ,
    ]}
    onClick={onClick}
    
  >
    <Meta title={item.author_name} description={item.report_name} />
  </Card>
  );
}
