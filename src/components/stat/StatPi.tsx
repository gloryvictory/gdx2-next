import { getPiCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';



export default async function StatPi() {
  const data = await getPiCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Card bordered={true}>
        <Statistic title="ПИ" value={data.count} />
      </Card>
    </div>
  )
}




