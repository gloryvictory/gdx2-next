import { getSubrfCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';



export default async function StatSubrf() {
  const data = await getSubrfCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Card bordered={true}>
        <Statistic title="Субъектов РФ" value={data.count} />
      </Card>
    </div>
  )
}




