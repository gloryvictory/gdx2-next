// import {  getCountByObj } from '@/app/actions/getCount';
// import {  Card, Col, Statistic } from 'antd';
// import Link from 'next/link';
// import { ReactElement, ReactNode } from 'react';


// interface Props {
//   title:string
//   href:string
//   obj:string
// }

// // export default async function StatItem(title:string, href:string,  obj:string): React.FC<Props> {
// export const StatItem: React.FC<Props> = async ({title, href,  obj}) => {
  
//   console.log(obj);
  
//   const data = await getCountByObj(obj);

//   return (
//     <>
//     <Col span={3}>
//       <div className=' hover:bg-gray-900 mt-1 '>
//         <Link href={href}>
//           <Card bordered={true}>
//             <Statistic title={title} value={data.count} />
//           </Card>
//         </Link>
//       </div>
//     </Col>
//     </>
    
//   )
// }




