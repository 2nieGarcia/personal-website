import { color } from "framer-motion"

export default function Footer(){
    return(
        <footer style={{ textAlign: 'center', padding: '1rem', background: 'black', }} className="text-white">
        <p>&copy; {new Date().getFullYear()} Made by Antonio Garcia. All rights reserved.</p>
      </footer>
    )
}