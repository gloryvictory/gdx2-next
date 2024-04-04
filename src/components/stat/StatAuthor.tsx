import { getAuthorCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';
import Link from 'next/link';



export default async function StatAuthor() {
  const data = await getAuthorCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Link href={'/author'}>
        <Card bordered={true}>
          <Statistic title="Авторов" value={data.count} />
        </Card>
      </Link>
    </div>
  )
}




