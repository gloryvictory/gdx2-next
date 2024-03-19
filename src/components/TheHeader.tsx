import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="mx-auto justify-center items-center py-4 bg-sky-800 text-center text-white ">
      <Link href="/" className="px-4 hover:text-slate-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        Статистика
      </Link>
      <Link href="/report" className="px-4 hover:text-slate-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        Авторы
      </Link>
      
      <Link href="/about" className="px-4 hover:text-slate-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        О программе
      </Link>

      <Link href="/blog" className="px-4 hover:text-slate-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        Блог
      </Link>
    </header>
  );
};

export { TheHeader };
