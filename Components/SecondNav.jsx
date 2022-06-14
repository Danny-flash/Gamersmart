import './secondNav.css'
import { NavLink } from "react-router-dom";

import { AiOutlineBulb} from 'react-icons/ai';
import { motion } from "framer-motion"

const Livariants = {
  hidden: { opacity: 0,
  },
  visible: { opacity: 1,
     transition: {
          duration: 3
     },
  }
}
const Cartvariants = {
  hidden: { opacity: 0,
    x: "50vw"
  },
  visible: { opacity: 1,
    x: 0,
     transition: {
          type: "spring",
          duration: 2
     },
  }
}
const SecondNav = () => {
  return (
    <nav className='second__nav'>
         <ul className="secnav__links">
         <motion.li
             initial="hidden"
             animate="visible"
             variants={Livariants}
         ><NavLink to="/">HOME</NavLink></motion.li>
                         <motion.li
                         initial="hidden"
                         animate="visible"
                         variants={Livariants}
                         ><NavLink to="products">SHOP</NavLink></motion.li>
                         <motion.li
                         initial="hidden"
                         animate="visible"
                         variants={Livariants}
                         ><NavLink to="aboutus">ABOUT US</NavLink></motion.li>
                         <motion.li
                         initial="hidden"
                         animate="visible"
                         variants={Livariants}
                         ><NavLink to="contact">CONTACT US</NavLink></motion.li>
                  </ul>
                  <motion.div className="clearance"
                    initial="hidden"
                    animate="visible"
                    variants={Cartvariants}
                  >
                      <AiOutlineBulb />
                      <p>CLEARANCE UP TO 30% OFF</p>
                  </motion.div>
    </nav>
  )
}

export default SecondNav