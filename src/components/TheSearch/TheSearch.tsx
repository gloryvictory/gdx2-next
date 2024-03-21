"use client";

import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;

const TheSearch = () => {

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return(
  <>
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 900 , color: '#fff' , backgroundColor: '#fff'}} />
  </>
  )  
};

export { TheSearch };
