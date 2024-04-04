import { getListCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';



export default async function StatList() {
  const data = await getListCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Card bordered={true}>
        <Statistic title="Листов карт" value={data.count} />
      </Card>
    </div>
  )
}




