import StatArea from '@/components/stat/StatArea';
import StatAuthor from '@/components/stat/StatAuthor';
import StatField from '@/components/stat/StatField';
import StatList from '@/components/stat/StatList';
import StatLu from '@/components/stat/StatLu';
import StatOrg from '@/components/stat/StatOrg';
import StatPi from '@/components/stat/StatPi';
import StatReport from '@/components/stat/StatReport';
import StatSubrf from '@/components/stat/StatSubrf';
import StatVidRab from '@/components/stat/StatVidRab';
import { Button, Card, Col, Row, Statistic } from 'antd';
import Head from 'next/head';


export default function Home() {
  return (
  <>
    <Head>
      Welcome to NextJS world
    </Head>
    

    <div className='mt-20 m-4'>
      <Row gutter={12}>
        <Col span={3}>
          <StatReport/>
        </Col>
        <Col span={3}>
          <StatAuthor/>
        </Col>
        <Col span={3}>
          <StatList/>
        </Col>
        <Col span={3}>
          <StatSubrf/>
        </Col>
        <Col span={3}>
          <StatOrg/>
        </Col>
        <Col span={3}>
          <StatArea/>
        </Col>
        <Col span={3}>
          <StatField/>
        </Col>
        <Col span={3}>
          <StatLu/>
        </Col>
        <Col span={3}>
          <StatPi/>
        </Col>
        <Col span={3}>
          <StatVidRab/>
        </Col>
      </Row>    
    </div>
  
  </>
  )
  
}
