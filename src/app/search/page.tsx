// 'use client'

import { Tooltip } from "antd";
import { Metadata } from "next";
// import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import LoadingPosts from "./loading";
import TheReport from "@/components/Report/TheReport";

// export const metadata: Metadata = {
//     title: "Отчеты | Авторы",
// };


export default async function Search({
  searchParams,
}: {
  searchParams: { q: string | undefined };
}) {
  
  // const searchParams = searchParams()!;
  const q = searchParams.q;

  return (
    <>
    <div className="mt-20">

      <Suspense key={searchParams.q} fallback={<LoadingPosts/>}>
        <h1>Ищем <strong>{q}</strong> </h1>    
        <TheReport query={q}/>
      </Suspense>
      

    </div>
    </>
  );
}
