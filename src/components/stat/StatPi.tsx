import { getPiCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';
import Link from 'next/link';



export default async function StatPi() {
  const data = await getPiCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Link href={'/pi'}>
        <Card bordered={true}>
          <Statistic title="ПИ" value={data.count} />
        </Card>
      </Link>      
    </div>
  )
}




