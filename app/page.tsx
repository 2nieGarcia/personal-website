'use client'
import { useRef, useState } from "react";
import { HeroParallax } from "./components/hero-parallax";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";


import { Source_Code_Pro } from "next/font/google";
import { Poppins } from "next/font/google";

const scp = Source_Code_Pro({
  subsets: ['latin'],
  weight:"200"
})

const pop = Poppins({
  subsets: ['latin'],
  weight:'400'
})

export default function Home() {
  const intro = useRef(null);
  const [textColor, setColor] = useState("white");
  const [introComplete, setIntroStat] = useState(false);
  
  return (
    <div >
       <div ref={intro} id="introCon" style={{color: textColor}}  className=' overflow-hidden flex flex-col h-screen w-[100%] absolute justify-center place-items-center bg-black text-4xl'>
            
            <TypeAnimation 
            style={{whiteSpace: "pre-line"}}
            className={scp.className}
            sequence={[
                ()=>{
                  gsap.to("#content", {display: "hidden"});
                },
                '/cd Portfolio\n',
                300,
                '/cd Portfolio\n/run',
                300,
                () => {
                setColor("darkgray")},
                'Compiling...',
                1000,
                '',
                () => {
                setColor("white")},
                'Welcome!',
                400,
                '',
                () => {
                gsap.timeline()
                
                .to("#introCon", { opacity: 0})
                setIntroStat(true);
                
            }
            ]}
            speed={69}
            wrapper="div"
            repeat={0}
            omitDeletionAnimation={true}
            ></TypeAnimation>
        
        </div>
        {introComplete && (
          <div className={pop.className}>
              <HeroParallax />
          </div>
        )}
    </div>
  );
}
