import Image from "next/image";
import Header from '@/components/Header/Header'
import NavBar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
  <div className="h-screen" >      
    <Header></Header>
    <NavBar></NavBar>
    <div className="flex h-[60%]" >
     <div className="w-1/2 flex flex-col  justify-center items-start ">
     <h1 className=" font-bold text-[40px] pt-[80px]">AI coders </h1>
     
     <p >"I am diving into the development of AI agents, focusing on creating dynamic, intelligent applications. By leveraging HTML and CSS for foundational structure and styling, TypeScript for type-safe coding, and Next.js for efficient rendering and routing, I am learning to build robust, interactive applications that showcase AI capabilities. Through this project, I aim to understand how AI agents can enhance user experiences by adapting in real time, processing user interactions, and providing intuitive responses. This hands-on experience is allowing me to explore both the technical and creative aspects of AI in web development, sharpening my skills across various frontend technologies while deepening my understanding of AI's role in modern applications."</p>
     
     </div>
     <div className="w-1/2 flex justify-center items-center pt-[80px]">
     <Image
     src={'./images/logo.svg'}
     alt="image"
     width={462}
     height={647}
     />
   </div>
   
   
   
    </div>
   </div>
     );
   }
    