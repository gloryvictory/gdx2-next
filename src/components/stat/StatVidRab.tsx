import {  getVidRabCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';
import Link from 'next/link';



export default async function StatVidRab() {
  const data = await getVidRabCount();

  return (
    
    <div className=' hover:bg-gray-900 mt-1 '>
      <Link href={'/author'}>
        <Card bordered={true}>
          <Statistic title="Вид работ" value={data.count} />
        </Card>      
      </Link>
    </div>

  )
}

