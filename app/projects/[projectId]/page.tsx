'use client'

import Link from "next/link";
import Navigation from "../../components/navigation";
import project from "../../components/projects.json";
import Image from "next/image";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function Projects({params}: {params: {projectId: number}}){
    const id = params.projectId;
    const language = project[id - 1].language;

    console.log()
    if (id <= project.length && id > 0){
        return (
            <div>
                <div className="absolute align-middle text-2xl md:text-4xl p-10 md:p-15">
                    <Link
                        href={"/projects"}
                        className="flex"
                        >
                         <IoArrowBackCircleOutline />
                        <h1>Back</h1>
                    </Link>
                </div>
                <div className="flex flex-col h-screen w-full p-[15vh] md:pt-[20vh] px-3 md:px-20">
                    <div className="flex flex-col md:flex-row h-[80%]">
                        <div className="text-4xl pb-10 inline-block md:hidden text-center">
                            <h1>
                                {project[id - 1].name}
                            </h1>
                        </div> 
                        <div className="w-full md:w-1/2 h-full min-h-[25vh] relative mb-10">
                            <Image 
                                
                                fill
                                src={`/projects/${project[id - 1].name}.jpg`}
                                alt={project[id - 1].name}
                                className="object-contain absolute"
                            >
                            </Image>
                        </div>

                        <div className="grid grid-flow-row w-full md:w-1/2 h-full px-4 md:px-10 justify-stretch">
                            <div className="text-4xl hidden md:inline-block md:text-6xl pb-10">
                                <h1>
                                    {project[id - 1].name}
                                </h1>
                            </div> 

                            <h1>{project[id - 1].description}</h1>

                            <div className="w-full md:w-2/3 p-3">
                                <div className="flex flex-wrap">
                                    {language.map((language) => {
                                        return language ? <i key={language} className="m-3" ><img src={`/icons/${language}.png`} alt={language} className="w-[5vh] h-[5vh]" /></i> : null;
                                    })}
                                </div>
                            </div>
                            
                            <div className="w-full md:w-1/3">
                                
                            </div>
                        </div>

                    </div>
                    <Navigation /> 
                </div>
            </div>
        )
    }else{
        return(
            <div>Page does not exist</div>
        )
    }
}