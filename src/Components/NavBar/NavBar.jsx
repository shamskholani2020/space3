import React from "react";

const NavBar = () => {
  return (
    <>
      <div
        className="
      hidden
    bg-gradient-to-b from-indigo-900 to-indigo-800 
    
    
      
      text-white
      h-16
      w-full
      mx-auto
      sm:flex
      justify-around
      items-center
      sm:px-30
      md:px-40
      
      shadow-xl

      "
      >
        <a
          href=""
          className="
        text-white
        text-sm
        hover:font-bold
        hover:text-indigo-100
        
        hover:text-lg
        transition-all ease-in-out duration-300

        "
        >
          HOME
        </a>
        <a
          href=""
          className="text-white
        text-sm
        hover:font-bold
        hover:text-indigo-100
        
        hover:text-lg
        transition-all ease-in-out duration-300"
        >
          PROJECT
        </a>
        <a
          href=""
          className="text-white
        text-sm
        hover:font-bold
        hover:text-indigo-100
        
        hover:text-lg
        transition-all ease-in-out duration-300"
        >
          ABOUT
        </a>
        <a
          href=""
          className="text-white
        text-sm
        hover:font-bold
        hover:text-indigo-100
        
        hover:text-lg
        transition-all ease-in-out duration-300"
        >
          CONTACT
        </a>
      </div>
      <div
        className="
      sm:hidden
    bg-gradient-to-b from-indigo-900 to-indigo-800 
      
      text-white
      font-bold
      h-16
      w-full
      mx-auto
      flex
      justify-around
      items-center
      px-20
      shadow-xl
      "
      >
        KHOLANI SPACE
      </div>
    </>
  );
};

export default NavBar;
