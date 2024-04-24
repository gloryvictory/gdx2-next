'use client'


// import { useSearchParams } from "next/navigation";
// import { Suspense } from "react";
// import LoadingPosts from "./loading";
// import TheReport from "@/components/Report/TheReport";

// { searchParams,}: {searchParams: { q: string | undefined };}

export default function Search() {
  
  // const searchParams = useSearchParams()!;
    // const q = searchParams.get("q")!;

  return (
    <>
    <div className="mt-20">

      {/* <Suspense key={q} fallback={<LoadingPosts/>}> */}
        <h1>Ищем <strong>{"вавапвап"}</strong> </h1>    
        {/* <TheReport query={q}/> */}
      {/* </Suspense> */}
      

    </div>
    </>
  );
}
