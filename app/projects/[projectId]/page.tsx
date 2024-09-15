'use client'

import Navigation from "../../components/navigation";
import project from "../../components/projects.json";
import Image from "next/image";

export default function Projects({params}: {params: {projectId: number}}){
    const id = params.projectId;
    const language = project[id - 1].language;

    console.log()
    if (id <= project.length && id > 0){
        return (
            <div className="flex flex-col h-screen w-fill pt-[20vh] px-20">

                <div className="flex">
                    <div className="w-1/2">
                        <Image 
                            height="800"
                            width="800"
                            src={`/projects/${project[id - 1].name}.jpg`}
                            alt={project[id - 1].name}
                        >
                        </Image>
                    </div>

                    <div className="w-1/2 px-10 justify-stretch">
                        <div className="text-6xl pb-10">
                            <h1>
                                {project[id - 1].name}
                            </h1>
                        </div> 

                        <h1>{project[id - 1].description}</h1>

                        <div className="w-1/2">
                            <div className="flex flex-wrap">
                                {language.map((language) => {
                                    return(
                                        <Image 
                                            height="50"
                                            width="50"
                                            src={`/icon/${language}.jpg`}
                                            alt={language}
                                        >
                                        </Image>
                                    )
                                })}
                            </div>
                        </div>
                        
                        <div className="w-1/2">
                            
                        </div>
                    </div>

                </div>
                <Navigation /> 
            </div>
        )
    }else{
        return(
            <div>Page does not exist</div>
        )
    }
}