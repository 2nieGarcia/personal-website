'use client'

import Projects from '../components/projects.json';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Projectlist(){
    
    const myRef = useRef(null);


    
    useGSAP(() =>{
        
    }, {scope: myRef})


    return (
        <div ref={myRef} className="wrapper">
            {Projects.map(projects => (
                <section key={projects.id} className="h-screen w-full">
                    <h1>{projects.name}</h1>
                </section>
            ))}
        </div>
    )
}