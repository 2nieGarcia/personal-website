'use client'
import { useRef, useState } from "react";
import { HeroParallax } from "./components/hero-parallax";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";


import { Source_Code_Pro } from "next/font/google";
import { Poppins } from "next/font/google";
import Navigation from "./components/navigation";
import About from "./sections/About"
import Footer from "./sections/Footer";

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
    <div>
       <div ref={intro} id="introCon" style={{color: textColor}}  className='fixed flex flex-col min-h-screen w-screen justify-center place-items-center bg-black text-4xl z-20'>
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
              },
              100,
              () => {
                
                gsap.to("#nav", {opacity: 1 })
              }
            ]}
            speed={69}
            wrapper="div"
            repeat={0}
            omitDeletionAnimation={true}
            ></TypeAnimation>
        </div>

        {introComplete && (
          <div id="content" className="hidden ">
            <div className={pop.className}>
              <div id="nav" className="opacity-0">
                <Navigation/>
              </div>
              
              <HeroParallax />
                
            </div>

            <div>
              <About />
            </div>

            <div>
              < Footer/>
            </div>
          </div>
        )}
        
    </div>
  );
}
