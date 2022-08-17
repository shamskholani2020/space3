import React,{useState} from 'react'
import './about.css'

export default function About() {
    const [isHover,setIsHover] = useState(false);
  return (
    <>
    <div 
    className={`"w-full h-[800px] flex justify-center items-center   bg-gradient-to-b from-gray-300  to-gray-100` }
    >
        <div
        className={`
        
        ${isHover ? 'text-center w-full h-full bg-[#f9f9f9]  ' : 'w-[200px] rounded-full h-[200px] text-center bg-indigo-100'}
        
        transition-all duration-200 ease-in
        flex
        justify-center
        items-center
        
    text-white
        text-xl

        `}
        onMouseEnter={()=>{
            setIsHover(true)
        }}
        onMouseLeave={()=>{
            setIsHover(false)
        }}
        onClick={()=>{
            setIsHover(true)
        }}
        >
            {!isHover ? "Hover Or Click Me" :null}
            {!isHover ? 
           null 
          :  <div
          className='w-full h-full flex flex-col md:flex-row justify-center items-center gap-5' 
          >
<div className='
w-full
h-full
p-3
lg:p-10
md:p-5
flex
justify-start
items-start

flex-col

'>
    <p className='text-md text-gray-500 font-small'>Lets</p>
<div className='flex flex-row justify-center items-end'>
    <h1 className='text-blue-600 font-bold text-6xl mr-3'>Connect</h1>
    <p className='text-md text-gray-500 font-small'>togther</p>

</div>
<form action="/">
    
    
</form>
</div>
<div className='
w-full
h-full
bg-yellow-400
'></div>


            </div> }

        </div>
    </div>
    </>
  )
}
