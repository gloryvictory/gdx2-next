'use client';

export const dynamic = 'force-dynamic'

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { Suspense, useCallback } from "react";
const { Search } = Input;

const TheSearch = () => {

  const searchParams = useSearchParams()!;
  const q = searchParams.get("q")!;
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
    router.push(`/search/?${createQueryString("q", value.toString())}`);
  }

  return(
  <>
  <Suspense>
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 900 , color: '#fff' , backgroundColor: '#fff'}} />
  </Suspense>
    
  </>
  )  
};

export { TheSearch };
