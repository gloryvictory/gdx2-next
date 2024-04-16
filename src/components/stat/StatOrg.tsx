import { getOrgCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';
import Link from 'next/link';



export default async function StatOrg() {
  const data = await getOrgCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Link href={'/org'}>
        <Card bordered={true}>
          <Statistic title="Организаций" value={data.count} />
        </Card>
      </Link>
      
    </div>
  )
}




