import {  getLuCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';



export default async function StatLu() {
  const data = await getLuCount();

  return (
      <div className=' hover:bg-gray-900 mt-1 '>
        <Card bordered={true}>
          <Statistic title="Лицензий" value={data.count} />
        </Card>
      </div>
  )
}




