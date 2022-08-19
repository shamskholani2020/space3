import { Player } from '@lottiefiles/react-lottie-player';
import { Button, Tab, TabPanel, Tabs, TabsBody, TabsHeader,Card,CardHeader,CardBody,CardFooter,  } from '@material-tailwind/react'
import React from 'react'
import Dialogg, { ProjectCard } from '../Components'
import { useTranslation } from 'react-i18next';
export default function Services() {


    const projects = [
        {
            title: 'Tracky App',
            titleAr: 'تراكي',
            description: 'We did this project to help people keep track of their glucose levels, contribute on a community, visual plot of their glucose level and generate pdf report that help doctors make decisions easily',
            descriptionAr:"لقد قمنا بهذا المشروع لمساعدة الأشخاص على تتبع مستويات الجلوكوز لديهم ، والمساهمة في المجتمع ، ووضع مخطط مرئي لمستوى الجلوكوز لديهم وإنشاء تقرير بتنسيق pdf يساعد الأطباء على اتخاذ القرارات بسهولة",
            date: '2021',
            image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/6efb39140137149.Y3JvcCwxMDU5LDgyOSw2OCww.png',
            url:"https://www.behance.net/gallery/140137149/Tracky-mobile-app-UIUX-design?tracking_source=search_projects%7Ctracky"
            
        },
        {
            title: 'Dasky App',
            titleAr:"تطبيق داسكي",
            description: 'Dasky is a platform to help users organize daily life by dividing daily tasks into several parts and displaying them in a distinctive way, and also helps users to organize long term goals and divide them either with daily tasks to help the user stay ahead or provide a package of tasks with frequent alerts',
            descriptionAr:"تطبيق داسكي هو منصة تساعد المستخدمين على تنظيم حياتهم بتقسيم المهام اليومية إلى أجزاء مختلفة وتعرضها بطريقة مختلفة ويساعد المستخدمين على تنظيم الأهداف الطويلة وتقسيمها إما بالمهام اليومية للمساعدة في الترفيه أو بتجهيز حزمة من المهام بتنبيهات متكررة للمساعدة في الترفيه",
            date: '2022',
            image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/271ad5138655775.Y3JvcCwyNTc2LDIwMTUsODksNzIw.png'
            ,
            url:"https://www.behance.net/gallery/138655775/DASKY-UI-UX-Mobile-Development"

        },
        {
            title: 'Momken App',
            titleAr:"تطبيق ممكن",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero sit quasi ducimus. a quae non deserunt laudantium doloremque doloribus, fugiat mollitia dolor in vitae eveniet cupiditate? Dolores, voluptas cum.',
            descriptionAr:" نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات",
            date: '2022',
            image: 'https://source.unsplash.com/random',
            url:"https://www.behance.net/gallery/140137149/Tracky-mobile-app-UIUX-design?tracking_source=search_projects%7Ctracky"

        }
    ];
    const webProjects = [
         {
            title: 'Momken App',
            titleAr:"تطبيق ممكن",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero sit quasi ducimus. a quae non deserunt laudantium doloremque doloribus, fugiat mollitia dolor in vitae eveniet cupiditate? Dolores, voluptas cum.',
            descriptionAr:" نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات",
            date: '2022',
            image: 'https://source.unsplash.com/random',
            url:"https://www.behance.net/gallery/140137149/Tracky-mobile-app-UIUX-design?tracking_source=search_projects%7Ctracky"

        }
    ];
    const uiuxProjects = [
         {
            title: 'Momken App',
            titleAr:"تطبيق ممكن",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero sit quasi ducimus. a quae non deserunt laudantium doloremque doloribus, fugiat mollitia dolor in vitae eveniet cupiditate? Dolores, voluptas cum.',
            descriptionAr:" نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات",
            date: '2022',
            image: 'https://source.unsplash.com/random',
            url:"https://www.behance.net/gallery/140137149/Tracky-mobile-app-UIUX-design?tracking_source=search_projects%7Ctracky"

        }, {
            title: 'Momken App',
            titleAr:"تطبيق ممكن",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero sit quasi ducimus. a quae non deserunt laudantium doloremque doloribus, fugiat mollitia dolor in vitae eveniet cupiditate? Dolores, voluptas cum.',
            descriptionAr:" نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات",
            date: '2022',
            image: 'https://source.unsplash.com/random',
            url:"https://www.behance.net/gallery/140137149/Tracky-mobile-app-UIUX-design?tracking_source=search_projects%7Ctracky"

        } ,{
            title: 'Momken App',
            titleAr:"تطبيق ممكن",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero sit quasi ducimus. a quae non deserunt laudantium doloremque doloribus, fugiat mollitia dolor in vitae eveniet cupiditate? Dolores, voluptas cum.',
            descriptionAr:" نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات نص وهمي لملئ الفراغ لحين استبداله بنص اخر بنفس المسافة و بدون تغييرات",
            date: '2022',
            image: 'https://source.unsplash.com/random',
            url:"https://www.behance.net/gallery/140137149/Tracky-mobile-app-UIUX-design?tracking_source=search_projects%7Ctracky"

        }
    ];
    const height = projects.length * 800;
    const language = localStorage.getItem('language') || navigator.language ;
    const en = {
      fontFamily: language === 'en' ? 'Poppins' : 'Cairo',
    };
    const [t] = useTranslation();

    

  return (
   <>
   <div className={`h-[${height}px]`}>

    <div className='w-full  bg-white flex flex-col justify-center items-center mt-20'
    >
         <Player
  autoplay
  loop
  src="https://assets9.lottiefiles.com/private_files/lf30_m3fdhwvc.json"
  className='w-full h-52  '
></Player>
    <h1  className='text-center text-gray-900 text-4xl mt-5' >{t('projects.title')}</h1>
    <h4  className='text-center text-gray-400 text-md my-5' >{t('projects.subtitle')}</h4>
    </div>
    <div
    className='w-full  bg-white mb-20'
    >
       
        
        <Tabs value="html" className="px-2 md:px-10 mt-5">
        <TabsHeader className='bg-gray-100' value='Flutter'>
            <Tab key='Flutter' value="Flutter">Flutter</Tab>
            <Tab key='Web' value="Web">Web</Tab>
            <Tab key='UI UX' value="UI UX">UI UX</Tab>
        </TabsHeader>
        <TabsBody
        className='w-full h-full'
        
        animate={{
            mount: { y: 0 },
            unmount: { y: 1000 },
        }}
        >
            
            <TabPanel key="Flutter" value="Flutter" className='w-full h-full'>
                <div class="grid grid-cols-1  lg:grid-cols-2 gap-5 mt-5">
                    {
                        projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                            ))
                            
                        }
                    
                   
            </div>
            </TabPanel>
            <TabPanel key="Web" value="Web"  className='w-full h-full'>
                 <div class="grid grid-cols-1  lg:grid-cols-2 gap-5 mt-5">
                    {
                        webProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                            ))
                            
                        }
                    
                   
            </div>
            </TabPanel>
            <TabPanel key="UI UX" value="UI UX"  className='w-full h-full'>
                 <div class="grid grid-cols-1  lg:grid-cols-2 gap-5 mt-5">
                    {
                        uiuxProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                            ))
                            
                        }
                    
                   
            </div>
                
            </TabPanel>
        </TabsBody>
        </Tabs>
    </div>
                        </div>
   </>
  )
}
