"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projects from "./projects.json"
import Header from "../sections/Header";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export const HeroParallax = () => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const parallax = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".header", {opacity: 0}, {opacity: 1})
  }, {scope: parallax})

  return (
    <div
      ref={parallax}
      className="header h-[300vh] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      
      <div className="">
        <Header />
      </div>

        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="relative"
        >

          
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((project) => (
              <ProjectCard
                project={project}
                translate={translateX}
                key={project.id}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row  mb-20 space-x-20 ">
            {secondRow.map((project) => (
              <ProjectCard
                project={project}
                translate={translateXReverse}
                key={project.id}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((project) => (
              <ProjectCard
                project={project}
                translate={translateX}
                key={project.id}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
  );
};



export const ProjectCard = ({
  project,
  translate,
}: {
  project: {
    id: number;
    name: string;
    link: string;
    
  };
  translate: MotionValue<number>;
}) => {
  const Imagepath = `/projects/${project.name}.jpg`
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.id}
      className="group/project h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={`projects/${project.id}`}
        className="block group-hover/project:shadow-2xl "
      >
        <Image
          src={Imagepath}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={project.name}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/project:opacity-100 text-white">
        {project.name}
      </h2>
    </motion.div>
  );
};
