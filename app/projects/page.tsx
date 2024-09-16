'use client'

import project from "../components/projects.json"
import { FocusCards } from "../components/focus-cards";
import Navigation from "../components/navigation";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function projectslist() {
    const projects = project.map((project) => ({
        title: project.name,
        src: `/projects/${project.name}.jpg`
    }));
    return(
        <div className="pt-[5vh] px-10">
            <Navigation />
            <div className="flex align-text-middle text-5xl">
                <Link
                    href={"/home"}
                    className=""
                >
                    <IoArrowBackCircleOutline />
                </Link>
                <h1 className="text-5xl pl-4">My Projects</h1>
            </div>
            <div className="rounded-md py-2 bg-grey md:bg-black mt-8">
                <FocusCards cards={projects} />
            </div>
        </div>
    )
}