'use client'
import { HeroParallax } from "../components/hero-parallax";



import { Source_Code_Pro } from "next/font/google";
import { Poppins } from "next/font/google";
import Navigation from "../components/navigation";
import About from "../sections/About";
import Footer from "../sections/Footer";

const scp = Source_Code_Pro({
  subsets: ['latin'],
  weight:"200"
})

const pop = Poppins({
  subsets: ['latin'],
  weight:'400'
})

export default function Home() {
  
  return (
    <div id="content" className="hidden ">
            <div className={pop.className}>
              <div id="nav" >
                <Navigation/>
              </div>
              
              <HeroParallax />
                
            </div>

            <div>
              <About />
            </div>

            <div>
              < Footer/>
            </div>  
          </div>
  );
}
