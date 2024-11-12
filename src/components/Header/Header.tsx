import Link from "next/link";
// import { TheSearch } from "../TheSearch/TheSearch";
// import Image from "next/image";
// import { TheSearch } from "./TheSearch/TheSearch";
// import logo from "/public/img/zsniigg.png";


const navigation = [
  { name: 'Статистика', href: '/', current: true },
  { name: 'Карта', href: '/map', current: true },
  { name: 'Карта2', href: '/map2', current: true },
  { name: 'Отчеты', href: '/report_table', current: false },
  { name: 'Поиск', href: '/search', current: false },
  { name: 'Пожелания', href: '/message', current: false },
  { name: 'О программе', href: '/about', current: false },
]


const Header = () => {
  const className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
  return (
    <header className="fixed w-full bg-gray-800  py-4 top-0 z-20">
      <div className="mx-auto px-4">
        <nav className="flex items-center justify-between">
          
          <a href="#" className="mr-4 inline-flex items-center">
            {/* <Image src="/logo.png" alt="zsniigg-icon.png" width={40} height={40} className="p-1" /> */}
            {/* <Image src="/logo.svg" alt="zsniigg-icon.png" width={40} height={40} className="fill-current text-white h-8 w-8 mr-2"/> */}
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
          
          {/* <div className="text-white text-2xl font-bold">
            <TheSearch/>          
          </div> */}
          <ul className="flex space-x-4">
            {
            
            navigation.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className= {className}>
                {item.name}       
              </Link>
            ))
            }
          </ul>
        </nav>
      </div>
    </header>
    );
};

export { Header };
