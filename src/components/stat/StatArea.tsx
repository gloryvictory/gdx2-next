import { getAreaCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';
import Link from 'next/link';



export default async function StatArea() {
  const data = await getAreaCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Link href={'/area'}>
        <Card bordered={true}>
          <Statistic title="Площадей" value={data.count} />
        </Card>
      </Link>
      
    </div>
  )
}




