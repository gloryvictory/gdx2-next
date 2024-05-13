'use client'
import React, { useState } from 'react';
import { Button, Col, Drawer, Row } from 'antd';
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

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
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
      <p className="site-description-item-profile-p">Отчет</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="#" content={item?.id} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Имя" content={item?.report_name} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Ссылка" content={item?.folder_link} />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};


