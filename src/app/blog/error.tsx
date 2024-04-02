"use client";

import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function ErrorWrapper({ error }: { error: Error }) 
{
  const router = useRouter();
  useEffect(() => { 
    setTimeout(()=>{
      router.push('/');
    }, 3000)
  }, [router]);

  return (
    <>
      <h1>Oops!!! {error.message}</h1>;
      <h2>Такой страницы тут нет...</h2>
      <p>перейти на <Link href={'/'}> <a>Главную страницу</a></Link></p>
    </>

  )
  
}
