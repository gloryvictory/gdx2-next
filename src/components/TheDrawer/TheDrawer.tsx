'use client'
import React, { useEffect, useState } from 'react';
import { Button, Col, Divider, Drawer, Row } from 'antd';
// import { type } from 'os';
import { ICountOnMap, IReport } from '@/app/types';
import { getCountOnMap } from '@/app/actions/getMap';
// import About from '../../app/about/page';



type PropsDrawer = {
  open:boolean,
  onClose: () => void,
  showDrawer: () => void, 
  item: IReport| undefined
}

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  content?.toString().length 
  ?  
  <Row>
    <Col span={6} >
      {title}
    </Col>
    <Col span={18} >
      <strong>{content}</strong>
    </Col>
    <Divider dashed className='mt-0 mb-2'/>
  </Row>
  : null
);


// function OpenExplorerWindow() {
  // window.open("file:///" + filePath);
  // window.open("file:///c:/");
    // var settings = 'height=550,width=775,top=' + (screen.height - 550) / 2 + ',left=' + (screen.width - 775) / 2 + ',scrollbars=yes,resizable=no';
  // var win = window.open('file:///c:/', 'ExplorerWindow', settings);
  // console.log(win);
  // win?.focus();
  // win?.window.focus();
  // // if (parseInt(navigator.appVersion) >= 4) {
  //   win?.window.focus();
  // }
// }

export const TheDrawer: React.FC<PropsDrawer> = ({open, onClose,showDrawer, item }:PropsDrawer) => {
  
  const [data, setData] = useState<ICountOnMap>()
  const [isLoading, setLoading] = useState<boolean>(false)
  
  const getData = async (rgf: string) => {
    setLoading(true)

    const items : ICountOnMap = await getCountOnMap(rgf)
    console.log(items)
    setData(items)
    setLoading(false)
  }
  
  useEffect(() => {
    console.log(item?.rgf)
    getData(item?.rgf)
  }, [item])

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer 
        title="Подробнее об отчете" 
        onClose={onClose} 
        open={open}
        width={720}
      >
            <DescriptionItem title="ID" content={item?.id} />
            <DescriptionItem title="Имя" content={item?.report_name} />
            <DescriptionItem title="Автор" content={item?.author_name} />
            <DescriptionItem title="Год" content={item?.year_str} />
            <DescriptionItem title="РГФ" content={item?.rgf} />
            <DescriptionItem title="ТГФ ХМАО" content={item?.tgf_hmao} />
            <DescriptionItem title="ТГФ ЯНАО" content={item?.tgf_ynao} />
            <DescriptionItem title="ТГФ Красноярск" content={item?.tgf_kras} />
            <DescriptionItem title="ТГФ Екатеринбург" content={item?.tgf_ekat} />
            <DescriptionItem title="ТГФ Омск" content={item?.tgf_omsk} />
            <DescriptionItem title="ТГФ Новосибирск" content={item?.tgf_novo} />
            <DescriptionItem title="ТГФ Томск" content={item?.tgf_tomsk} />
            <DescriptionItem title="ТГФ МорскойТГФ" content={item?.tgf_more} />
            <DescriptionItem title="ТГФ Тюмень" content={item?.tgf_tmn} />
            <DescriptionItem title="ТГФ Курган" content={item?.tgf_kurgan} />
            <DescriptionItem title="ТГФ" content={item?.tgf} />
            <DescriptionItem title="Субъект РФ" content={item?.subrf_name} />
            <DescriptionItem title="Площадь" content={item?.areaoil} />
            <DescriptionItem title="Месторождение" content={item?.field} />
            <DescriptionItem title="Полезные ископаемые" content={item?.pi_name} />
            <DescriptionItem title="Территория" content={item?.territory_name} />
            <DescriptionItem title="Источник финансирования" content={item?.fin_name} />
            <DescriptionItem title="Организация" content={item?.org_name} />
            <DescriptionItem title="Листы карты" content={item?.list_name} />
            <DescriptionItem title="ЗАПСИБНИИГГ отчет" content={item?.zsniigg_report} />
            <DescriptionItem title="Партия" content={item?.part_name} />
            <DescriptionItem title="Вид работ" content={item?.vid_rab} />
            <DescriptionItem title="Информационный отчет" content={item?.inf_report} />
            <DescriptionItem title="Ссылка" content={item?.folder_root} />
            {/* <button onClick={()=>OpenExplorerWindow()} className='bg-slate-500 rounded hover:bg-slate-800'>Open Explorer Window</button>
            <input type="file"  title='sdfsdsdfsdf'/>  */}
            <DescriptionItem title="Комментарии" content={item?.comments} />
            <DescriptionItem title="Дата обновления" content={new Date(item?.lastupdate!).toLocaleDateString('ru-RU')} />

            {isLoading
            ? <div>Loading...</div> 
            : <DescriptionItem title="На карте (Точки)" content={data ? data.sta_count : 0} />
            }
            {isLoading
            ? <div>Loading...</div> 
            : <DescriptionItem title="На карте (Линии)" content={data ? data.stl_count : 0} />
            }
            {isLoading
            ? <div>Loading...</div> 
            : <DescriptionItem title="На карте (Полигоны)" content={data ? data.stl_count : 0} />
            }

      </Drawer>
    </>
  );
};



