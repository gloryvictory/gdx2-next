import { Button, Col, Row, Statistic } from 'antd';


export default function Home() {
  return (
  <>
    <h1>Welcome to NextJS world</h1>;
    <div className='m-4'>
      <Row gutter={12}>
        <Col span={8}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={8}>
          <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
        </Col>
      </Row>    
    </div>
  
  </>
  )
  
}
