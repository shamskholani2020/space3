import { Player } from '@lottiefiles/react-lottie-player';
import { Button, Tab, TabPanel, Tabs, TabsBody, TabsHeader,Card,CardHeader,CardBody,CardFooter,  } from '@material-tailwind/react'
import React from 'react'
import Dialogg, { ProjectCard } from '../Components'

export default function Services() {
    const projects = [
        {
            title: 'Tracky App',
            description: 'Project overview: We did this project to help people keep track of their glucose levels, contribute on a community, visual plot of their glucose level and generate pdf report that help doctors make decisions easily',
            date: '2021',
            image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/6efb39140137149.Y3JvcCwxMDU5LDgyOSw2OCww.png',
            url:"https://www.behance.net/gallery/140137149/Tracky-mobile-app-UIUX-design?tracking_source=search_projects%7Ctracky"
            
        },
        {
            title: 'Dasky App',
            description: 'Dasky is a platform to help users organize daily life by dividing daily tasks into several parts and displaying them in a distinctive way, and also helps users to organize long term goals and divide them either with daily tasks to help the user stay ahead or provide a package of tasks with frequent alerts',
            date: '2022',
            image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/271ad5138655775.Y3JvcCwyNTc2LDIwMTUsODksNzIw.png'
            ,
            url:"https://www.behance.net/gallery/138655775/DASKY-UI-UX-Mobile-Development"

        },
        {
            title: 'Momken App',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero sit quasi ducimus. a quae non deserunt laudantium doloremque doloribus, fugiat mollitia dolor in vitae eveniet cupiditate? Dolores, voluptas cum.',
            date: '2022',
            image: 'https://source.unsplash.com/random',
            url:"https://www.behance.net/gallery/140137149/Tracky-mobile-app-UIUX-design?tracking_source=search_projects%7Ctracky"

        }
    ];
    const height = projects.length * 800;
    // detect language of the browser
    const language = navigator.language;

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
    <h1  className='text-center text-gray-900 text-4xl mt-5' >Our Projects</h1>
    <h4  className='text-center text-gray-400 text-md my-5' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi magnam deleniti.</h4>
    </div>
    <div
    className='w-full  bg-white mb-20'
    >
        <h1>
            {language === 'en-GB' ? 'المشاريع' : 'Projects'}
             ?????? {language}
        </h1>
        
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
            <TabPanel key="Web" value="Web">
                Web
            </TabPanel>
            <TabPanel key="UI UX" value="UI UX">
                UI UX
            </TabPanel>
        </TabsBody>
        </Tabs>
    </div>
                        </div>
   </>
  )
}
