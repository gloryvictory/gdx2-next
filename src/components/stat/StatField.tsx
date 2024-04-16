import { getFieldCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';
import Link from 'next/link';



export default async function StatField() {
  const data = await getFieldCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Link href={'/field'}>
        <Card bordered={true}>
          <Statistic title="Месторождений" value={data.count} />
        </Card>
      </Link>
    </div>  
  )
}




