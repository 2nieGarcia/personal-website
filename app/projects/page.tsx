'use client'

import project from "../components/projects.json"
import { FocusCards } from "../components/focus-cards";
import Navigation from "../components/navigation";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { TransitionLink } from "../components/transitionLink";
import { Poppins, Source_Code_Pro } from "next/font/google";


const scp = Source_Code_Pro({
    subsets: ['latin'],
    weight:"200"
  })
  
  const pop = Poppins({
    subsets: ['latin'],
    weight:'400'
  })

export default function projectslist() {
    const projects = project.map((project) => ({
        title: project.name,
        src: `/projects/${project.name}.jpg`
    }));
    return(
        <div className="pt-[5vh] px-10">
            <Navigation />
            <div className="flex items-center text-3xl md:text-4xl text-gray-400">
                <TransitionLink
                    href={"/home"}
                    className="text-6xl align-middle"
                >
                    <IoArrowBackCircleOutline />
                </TransitionLink>
                <div className={scp.className}>
                    <h1 className=" pl-4 text-gray-400">My Projects</h1>
                </div>
            </div>
            <div className="rounded-md py-2 bg-grey md:bg-black mt-8">
                <FocusCards cards={projects} />
            </div>
        </div>
    )
}