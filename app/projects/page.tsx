'use client'

import project from "../components/projects.json"
import { FocusCards } from "../components/focus-cards";
import Navigation from "../components/navigation";



export default function projectslist() {
    

    const projects = project.map((project) => ({
        title: project.name,
        src: `/projects/${project.name}.jpg`
    }));
    console.log(projects);

    return(
        <div className="py-10 px-10">
            <Navigation />
            <div className="flex text-6xl align-middle w-full text-center mb-10">
                <h1>Projects</h1>
            </div>
            <div className="rounded-md py-10 bg-grey md:bg-black ">
                <FocusCards cards={projects} />
            </div>
        </div>
    )
}