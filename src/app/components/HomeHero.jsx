import Image from "next/image";
import flower2 from "../../../public/images/flowers/purple-flower-long.png";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function HomeHero() {
return (
         <div className="border-t-2 border-dark-grey w-[100%] lg:h-[500px] 2xl:h-[500px]">
      <div className="flex h-full flex-col justify-end px-4 py-11 md:px-3 lg:px-10 ">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 xs:pt-8 sm:pl-4 sm:pt-8 md:pt-10 md:pl-7 lg:pl-10">
          <div className="w-[915px] max-xs:w-[100%] max-xs:p-2 max-xs:pt-8 sm:w-[100%] md:w-[120%] lg:pt-20">
            <h2 className="w-full whitespace-nowrap text-[clamp(2rem,5vw,5rem)] font-two font-semibold tracking-widest pb-0 xs:pb-8 xs:text-5xl lg:text-[clamp(2rem,5vw,5rem)] 2xl:text-[clamp(2rem,5vw,5rem)]">
              Hi, I'm Liliana!
            </h2>
            <p className="pb-2 max-xs:pt-3 sm:pt-3 md:pt-5 tracking-wider text-lg w-[100%]">
              I'm a passionate <b>frontend developer</b> and <b>UI/UX designer</b> from Chicago dedicated to creating visually appealing and user-friendly web experiences. My web development background and design skills allow me to craft visually appealing, intentional work that connects ideas, culture, and audiences.
            </p>
          </div>
        
          <div className="justify-self-center md:justify-self-end w-auto h-auto pt-3 transition duration-300 ease-in-out rotate-0 hover:rotate-10 md:justify-self-end md:pr-20">
            <Image
              src={flower2}
              alt="White flower illustration"
              width={160}
              height={200}
              priority
              className="w-auto h-auto"
            />
          </div>
          
      </div>
    <div className="group flex items-center justify-center gap-2 text-dark-grey pt-10 md:pt-20 lg:pt-20">
  <p className="text-2xl group-hover:italic ">Interested? Take a look!</p>
  <FaArrowTurnDown className="transition-transform duration-200 ease-out group-hover:translate-y-1" />
</div>
       
    </div>
   
    </div>
);
}