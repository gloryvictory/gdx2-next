'use client'
import React, { useState } from 'react';
import { Button, Col, Divider, Drawer, Row } from 'antd';
import { type } from 'os';
import { IReport } from '../types';

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

// const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
//   <div className="site-description-item-profile-wrapper">
//     <p className="site-description-item-profile-p-label">{title}:</p>
//     {content}
//   </div>
// );
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
  </Row>
  : null
);

export const TheDrawer: React.FC<PropsDrawer> = ({open, onClose,showDrawer, item }:PropsDrawer) => {

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
            <Divider dashed />
            <DescriptionItem title="Имя" content={item?.report_name} />
            <Divider dashed />
            <DescriptionItem title="Автор" content={item?.author_name} />
            <Divider dashed />
            <DescriptionItem title="Год" content={item?.year_str} />
            <Divider dashed />
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
            <DescriptionItem title="Комментарии" content={item?.comments} />
            <DescriptionItem title="Дата обновления" content={item?.lastupdate} />
      </Drawer>
    </>
  );
};


