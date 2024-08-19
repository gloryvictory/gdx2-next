import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router'


// export default async function Stp({
//   params,
//   searchParams,
// }: {
//   params: { slug: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }) {
export default async function Stp({ params }: { params: { slug: string } }) {

  // const data = await fetchDataFromDB();
  // const router = useRouter()
  const slug = params.slug
  const prisma = new PrismaClient()
  const allUsers = await prisma.stp.findFirst();

  // user.findMany()
  console.log(allUsers)
  // console.log(router.query.slug)
  console.log(slug)

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }
  
  return(
    <>
    <h3>Сделано для MapAPI  </h3>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Post: {slug}</p>
    <p>Сделано для MapAPI  </p>
    <p>{allUsers.avts}  </p> 
    <p>{allUsers.name_otch}  </p> 
    <p>{allUsers.name_otch1}  </p> 
    
    </>
    
  ) 
}

