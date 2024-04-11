import { getSubrfCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';
import Link from 'next/link';



export default async function StatSubrf() {
  const data = await getSubrfCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Link href={'/subrf'}>
        <Card bordered={true}>
          <Statistic title="Субъектов РФ" value={data.count} />
        </Card>
      </Link>
      
    </div>
  )
}




