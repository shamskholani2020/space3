import React from 'react'
import Typed from 'react-typed'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Button, Typography } from '@material-tailwind/react';

export default function Hero() {
  return (
    <>
    <div
    className='
    h-[800px]
    w-full
    bg-gradient-to-b from-indigo-800 to-indigo-100 
    flex
    justify-center
    items-center
    md:flex-row
    flex-col-reverse
    md:p-[40px]
    p-[40px]
    

    '
    >
    <div className='flex justify-start items-start flex-col md:w-2/4 w-full'>
    <Typed className='text-blue-100' strings={[
      "New short sentense",
    ]} 
    typeSpeed={40}
    backSpeed={20}
    loop
    />
    {/* <h1 className='text-white font-semibold text-[4rem]'>Lorem Ipsum</h1> */}
    <Typed
    className='text-white font-semibold text-[4rem]'
      strings={[
            "Mobile DEV",
            "Web Developer",
            "UI UX Desinger"
            
          ]}
          typeSpeed={220}
          backSpeed={100}
          loop
        />
    <Typography variant="lead" color="white" className='mt-5' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus libero sit quasi ducimus. a quae non deserunt laudantium doloremque doloribus, fugiat mollitia dolor in vitae eveniet cupiditate? Dolores, voluptas cum.</Typography>
    


    <Button variant='gradient' size='2xl' className=' 
    w-full
    md:w-2/4
    px-auto
    py-5
    mt-10
    text-white
    font-semibold
    
    

    
    '
    color='indigo'
    >CONTACT</Button>
    </div>
    <div className=' w-2/4
     h-full
    ml-5
    rounded-md  
    flex
    justify-center
    items-center
    '  >
      <Player
  autoplay
  loop
  src="https://assets10.lottiefiles.com/packages/lf20_wbwoxby3.json"
  className='w-full h-full '
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
      
    </div>
    </div>
    
      </>
  )
}
