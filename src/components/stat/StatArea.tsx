import { getAreaCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';



export default async function StatArea() {
  const data = await getAreaCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Card bordered={true}>
        <Statistic title="Площадей" value={data.count} />
      </Card>
    </div>
  )
}




