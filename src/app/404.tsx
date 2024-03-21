"use client";

import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Custom404() 
{
  const router = useRouter();
  useEffect(() => { 
    setTimeout(()=>{
      router.push('/');
    }, 3000)
  }, []);

  return (
    <>
      <h1>Oops!!! :=( </h1>;
      <h2>Такой страницы тут нет...</h2>
      <p>перейти на <Link href={'/'}> <a>Главную страницу</a></Link></p>
    </>

  )
  
}
