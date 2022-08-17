import React from 'react';
import {  useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  
  Card,CardHeader,CardBody,CardFooter,
} from "@material-tailwind/react";


const Dialogg = (props) => {
      const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);
    return (
       <>
       
     
        <Button onClick={() => handleOpen("xxl")} variant="gradient" >
          Check Out
        </Button>
     
    

      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        
        
        
        className="fixed mx-0 inset-0 z-10 overflow-y-auto"
        
        handler={handleOpen}
      >
        
        <DialogBody >
        <div className='flex flex-col-reverse lg:flex-row-reverse justify-center items-center '>
        <div className='flex flex-col justify-start items-start m-5'>
        <h2  className="mb-2 text-indigo-800 ">{props.title}</h2>
        <p  className='text-gray-500 mb-10 text-md'>{props.date}</p>

        <p className='text-md text-gray-500'>{props.description}</p>
        
        <div className='flex flex-row justify-around items-center gap-5 mt-5'>
          
         {/* <Button color='gray' variant='text'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></Button> */}

<Button variant='text' color='gray' onClick={()=>{
    // launch url
    window.open(props.url, '_blank');
}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-google-play" viewBox="0 0 16 16">
  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
</svg>
</Button>
<Button variant='text' color='gray' onClick={()=> window.open(props.url,"_blank")}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"/>
</svg>
    </Button>

        </div>
        </div>
        <img src={props.image} className='h-[70vh] w-full   object-cover rounded-xl' />

        </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="indigo"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Stay Here</span>
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={() =>{
                // launch url
                window.open(props.url, '_blank');

            }}
          >
            <span>View On Behance</span>
          </Button>
        </DialogFooter>
      </Dialog>


    
       </>
    );
}


 export const ProjectCard = (props)=>{
    return (
        <>
         <Card className="md:w-100 w-full text-left">
      
      <CardBody className="text-left">
        <div className='flex justify-center items-center flex-col-reverse md:flex-row-reverse gap-5'>
            <div className='flex flex-col '>
                <h4  className="mb-2 text-gray-900 text-2xl font-semibold" >
          {props.title}
        </h4>
        <div className='max-h-[80px] overflow-auto'>

        < p6>
          {props.description}
        </p6>
        </div>
            </div>
            <img className='w-full object-cover h-[200px] rounded-lg'  src={props.image}/>
        </div>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <p className='text-sm'>{props.date}</p>
          
        <Dialogg title={props.title} description={props.description} date={props.date} image={props.image} url={props.url}/>
      </CardFooter>
    </Card>
        </>
    );
}

export default Dialogg ; 
