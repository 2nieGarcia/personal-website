'use client'
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Header(){

    const [isTyping, setTyping] = useState(true);
    const container = useRef(null);
    
    
    useGSAP(() =>{
      gsap.registerPlugin(ScrollTrigger);
      
      const worksAnimation = gsap.timeline()
          .set("#works", {opacity: 0, yPercent: -850, xPercent: 20 })
          .to("#works", {opacity: 1, yPercent: 0,xPercent: 0,})
      ScrollTrigger.create({
        trigger: ".container",
        start: "23% 50%",
        end: "28% 50%",
        animation: worksAnimation,
        markers: false,
        once: false,
        scrub: 1
      })
      
    }, {scope: container})

    return (
      <div ref={container} className="relative">
        


        <div className="max-w-7xl mx-0 md:mx-[10vh] py-20 md:py-40 px-4 w-full  left-0 top-0">
            <div>
                <div className="min-h-[60vh] flex flex-col max-w-7xl py-10 md:py-30 px-1 w-full  left-0 top-0">

                <p className="font-bold text-gray-400">Hello! I am</p>
                <TypeAnimation 
                    cursor={false}
                    className="mt-[3vh] mb-[10vh] text-6xl md:text-7xl font-bold dark:text-white" 
                    sequence={[
                        800,
                        "Antonio Garcia",
                        
                    ]} 
                    />
                    
                <TypeAnimation 
                    className=" max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
                    sequence={[
                        '',
                        1200,   
                        'a developer and currently a student at the National University of the Philippines, pursuing a Bachelor\'s degree in Computer Science with a specialization in Machine Learning. In my free time, I develop websites, games, and applications.',
                        () => {
                          setTyping(false);
                        }
                      ]} 

                    speed={90}
                />
                
            </div>
        </div>
        </div>
          <div className="absolute flex text-6xl md:text-7xl inset-x-0 bottom-0 left-20 md:left-10 translate-y-[45vh] md:translate-y-[55vh] text-white">
            <div className="">
              <h1 id="works" className="Works">Works</h1>
            </div>
          </div>
      </div>
      
      
    );
  }