'use client'
import { TypeAnimation } from "react-type-animation";
import React from "react";
import { useState } from "react";



export default function Header(){

    const [isTyping, setTyping] = useState(true);


    return (
      <div className="relative">
        


        <div className="max-w-7xl mx-[10vh] py-20 md:py-40 px-4 w-full  left-0 top-0">
            <div>
                <div className="min-h-[60vh] flex flex-col max-w-7xl py-10 md:py-30 px-2 w-full  left-0 top-0">

                <p className="font-bold text-gray-400">Hello! I am</p>
                <TypeAnimation 
                    cursor={false}
                    className="mt-[3vh] mb-[10vh] text-2xl md:text-7xl font-bold dark:text-white" 
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
        <div className="absolute flex text-2xl md:text-7xl inset-x-0 bottom-0 left-20 translate-y-[50vh]">
            <h1 className="">Projects</h1>
          </div>
      </div>
      
      
    );
  }