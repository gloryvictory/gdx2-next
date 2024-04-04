import { getReportCount } from '@/app/actions/getCount';
import {  Card, Statistic } from 'antd';



export default async function StatReport() {
  const data = await getReportCount();

  return (
    <div className=' hover:bg-gray-900 mt-1 '>
      <Card bordered={true}>
        <Statistic title="Отчетов" value={data.count} />
      </Card>
    </div>
  )
}




