const Footer = () => {
  // футер сайта текст по центру и на весь экран
  // className="justify-end items-end bg-sky-800 text-center text-white fixed inset-x-0 bottom-0"
  return(
  <>
    <div className="relative ">
      <div className="absolute bottom-0 right-0  bg-sky-800  text-white ">Created by &copy;zsniigg</div>
    </div>
    {/* <footer className="flex fixed justify-end items-end bg-sky-800  text-white bottom-0 w-fit">
      Created by &copy;zsniigg
    </footer> */}
  </>
  )  
};

export { Footer };
