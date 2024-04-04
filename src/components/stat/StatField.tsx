import { getFieldCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';



export default async function StatField() {
  const data = await getFieldCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Card bordered={true}>
        <Statistic title="Месторождений" value={data.count} />
      </Card>
    </div>  
  )
}




