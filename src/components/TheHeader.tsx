
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;

// const TheHeader = () => {
//   return (
//     <header classNameNameName="mx-auto justify-center items-center py-4 bg-sky-800 text-center text-white ">
//       <Link href="/" classNameNameName="px-4 hover:text-slate-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
//         Статистика
//       </Link>
//       <Link href="/author" classNameNameName="px-4 hover:text-slate-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
//         Авторы
//       </Link>
      
//       <Link href="/about" classNameNameName="px-4 hover:text-slate-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
//         О программе
//       </Link>

//       <Link href="/blog" classNameNameName="px-4 hover:text-slate-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
//         Блог
//       </Link>
//     </header>
//   );
// };

// export { TheHeader };

// const user = {
//   name: 'Вячеслав Замараев',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }

const navigation = [
  { name: 'Статистика', href: '/', current: true },
  { name: 'Авторы', href: '/author', current: false },
  { name: 'О программе', href: '/about', current: false },
  { name: 'Блог', href: '/blog', current: false },
  { name: 'Reports', href: '#', current: false },
]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNameNameNames(...classNameNamees) {
//   return classNameNamees.filter(Boolean).join(' ')
// }


export  function TheHeader() {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


  return (
    <>
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-white h-8 w-8 mr-2"
        >
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          />
        </svg>
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Отчеты
        </span>
      </a>
      {/* <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i className="material-icons">menu</i>
      </button> */}
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div
          // className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
          className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
        

        <div 
          // className="lg:flex hidden items-center bg-white py-1 px-2 rounded-full space-x-96"
          className="lg:flex hidden items-center bg-white py-1 px-2 rounded-full space-x-2"
        >
          <span>
          <SearchOutlined />
          </span>
          <input 
            className="lg:flex  outline-none" 
            type="text" 
            placeholder="Поиск" 
          />
        </div>


          {navigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
              {item.name}       
            </Link>
          ))
          }
        </div>
      </div>
    </nav>
    </>
  )
}



{/* <header>
<nav classNameName="bg-gray-700">
  <div classNameName="container mx-auto py-4 flex justify-between items-center">
    <h1 classNameName="text-2xl font-bold text-gray-50">RapidTutorials</h1>
    <div classNameName="flex space-x-10">
      <div classNameName="flex items-center space-x-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </span>
        <span classNameName="text-gray-50">Topics</span>
      </div>
      <div classNameName="flex items-center space-x-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </span>
        <span classNameName="text-gray-50">Blog</span>
      </div>
      <div classNameName="flex items-center space-x-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>
        <span classNameName="text-gray-50">Certificate Training</span>
      </div>
    </div>
    <div classNameName="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input classNameName="outline-none" type="text" placeholder="Search" />
    </div>
  </div>
</nav>
</header> */}
