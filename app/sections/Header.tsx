'use client'
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";


export default function Header(){
    return (
      <div>
        <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <div>
                <div className="min-h-[80vh] flex flex-col max-w-7xl mx-auto py-10 md:py-30 px-4 w-full  left-0 top-0">

                <p className="font-bold text-gray-400">Hello! I am,</p>
                <TypeAnimation 
                    cursor={false}
                    className=" mt-[3vh] mb-[10vh] text-2xl md:text-7xl font-bold dark:text-white" 
                    sequence={[
                        800,
                        "Antonio Garcia",
                    ]} 
                    />

                <TypeAnimation 
                    className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
                    sequence={[
                        '',
                        1200,   
                        'A Developer and currently a student in National University in the Philippines. Taking Bachelor of Computer Science Specializing in Machine Learning. I also develop Website, Games, and applications on my free time.'
                    ]} 
                    speed={90}
                />
                
            </div>
        </div>

        </div>
      </div>
      
      
    );
  }