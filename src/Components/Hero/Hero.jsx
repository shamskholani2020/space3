import React,{useState, useEffect, useTransition} from 'react'
import Typed from 'react-typed'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Button, Typography } from '@material-tailwind/react';
import { Trans, useTranslation } from 'react-i18next';



export default function Hero() {

  
  const [t,i18n] = useTranslation();   
  const language = localStorage.getItem('language') || navigator.language ;
  
  const changeLanguage = ()=>{
    i18n.changeLanguage(language === 'en' ? 'ar' : 'en');
    localStorage.setItem('language',i18n.language);
    
    
  };
  const html = document.getElementById("hh");
  html.dir = language === 'en' ? 'ltr' : 'rtl';
  
  document.getElementById("body").style.fontFamily = language === 'en' ? 'Poppins' : 'Cairo';
  
  
  
  const en = {
      fontFamily: language === 'en' ? 'Poppins' : 'Cairo',
    };



    



  
    
       
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
    <Typed className='text-blue-100 ' strings={[
    
      t('hero.subtitle1'),
      t('hero.subtitle2'),
      t('hero.subtitle3'),
    
    ]} 
    typeSpeed={40}
    backSpeed={20}
    loop
    />
    {/* <h1 className='text-white font-semibold text-[4rem]'>Lorem Ipsum</h1> */}
    <Typed
    className='text-white font-semibold text-[4rem]'
      strings={[
          t('hero.title1'),
      t('hero.title2'),
      t('hero.title3'),
            
          ]}
          typeSpeed={220}
          backSpeed={100}
          loop
        />
    <Typography variant="lead" color="white" className='mt-5' style={en} >{t('hero.shortDesc')}</Typography>
    

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
    style={en}
    onClick={()=>{
      changeLanguage('ar');
    }}
    >{t('hero.cta')}</Button>
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
  
</Player>
      
    </div>
    </div>
    
      </>
  )
}
