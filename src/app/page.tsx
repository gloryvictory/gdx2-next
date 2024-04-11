
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
import { Col, Row } from 'antd';
import Head from 'next/head';



// const navigation = [
//   { title: 'Отчетов', href: '/', obj: 'report' },
//   { title: 'Авторов', href: '/author', obj: 'author' },
//   { title: 'Листов карт', href: '#', obj: 'list' },
//   { title: 'Субъектов РФ', href: '#', obj: 'subrf' },
//   { title: 'Организаций', href: '#', obj: 'org' },
//   { title: 'Площадей', href: '#', obj: 'area' },
//   { title: 'Месторождений', href: '#', obj: 'field' },
//   { title: 'Лицензий', href: '#', obj: 'lu' },
//   { title: 'ПИ', href: '#', obj: 'pi' },
//   { title: 'Вид работ', href: '#', obj: 'vid_rab' },
// ]



export default function Home() {
  return (
  <>
    <Head>
      Статистика
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

        {/* {navigation.map((item) => (StatItem key={item.obj} title={item.title} href={item.href} obj={item.obj} /> ))} */}


      </Row>    
    </div>
  
  </>
  )
  
}
