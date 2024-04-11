import { getListCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';
import Link from 'next/link';



export default async function StatList() {
  const data = await getListCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Link href={'/list'}>
        <Card bordered={true}>
          <Statistic title="Листов карт" value={data.count} />
        </Card>
      </Link>
    </div>
  )
}




