import { Button, Card, Col, Row, Statistic } from 'antd';
import Head from 'next/head';


export default function Home() {
  return (
  <>
    <Head>
      Welcome to NextJS world
    </Head>
    

    <div className='m-4'>
      <Row gutter={12}>
        <Col span={4}>
          <Card bordered={true}>
            <Statistic title="Отчетов" value={112893} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bordered={true}>
            <Statistic title="Авторов" value={112893} precision={2} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bordered={true}>
            <Statistic title="Листов карты" value={112893} precision={2} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bordered={true}>
            <Statistic title="Субъектов РФ" value={112893} precision={2} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bordered={true}>
            <Statistic title="Организаций" value={112893} precision={2} />
          </Card>
        </Col>
      </Row>    
    </div>
  
  </>
  )
  
}
