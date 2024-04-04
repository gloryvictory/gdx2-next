import { getOrgCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';



export default async function StatOrg() {
  const data = await getOrgCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Card bordered={true}>
        <Statistic title="Организаций" value={data.count} />
      </Card>
    </div>
  )
}




