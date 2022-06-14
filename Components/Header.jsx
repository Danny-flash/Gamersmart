import "./Header.css"
import { BsSearch, BsCart2, BsHeart, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineClose, AiOutlineTwitter, AiFillDelete} from 'react-icons/ai';
import { GiHamburgerMenu} from 'react-icons/gi';
import { IoMdCall} from 'react-icons/io';
import { FaFacebookF} from 'react-icons/fa';
import { useState } from "react";
import { NavLink , Link } from "react-router-dom";
import { Badge, Button, Dropdown, Nav } from "react-bootstrap"
import { CartState } from '../Context/Context'
import { AnimatePresence, motion } from "framer-motion"

const Logovariants = {
  hidden: { opacity: 1,
    x: "-50vw"
  },
  visible: { opacity: 1,
    x: 0,
     transition: {
          type: "spring",
          duration: 1,
          stiffness: 20
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

const Header = () => {

  const { state: {cart} , dispatch} = CartState()

  const [show, setShow] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const handleShowNav = () =>{
    setShow(prevState => !prevState)
  }
  const handleShowCart = () =>{
    setShowCart(prevState => !prevState)
  }
     
  return (
    <nav className="navbar">

<div className="topnav">
  <div className="call">
    <p> <IoMdCall  className="cal"/> Call: +2348166827347</p>
  </div>
  <div className="others">
        
        <div className="login">
            <AiOutlineUser className="cal"/>
            <p>Login</p>
        </div>
  </div>
</div>

        <div className="nav__container">
           <GiHamburgerMenu  className="icon open" onClick={handleShowNav}/>
        <div className="logo"
        >
                   <Link to="/">Gamers<span>mart</span></Link>
            </div>

            <motion.div className="search"
            >
                <BsSearch className="icon srh"  htmlFor="search"/>
                           <input type="text"
                            name="search"
                           placeholder="Search product..."
                           id="search"
                           />
            </motion.div>
            
            <motion.div className="cart__icons"
             initial="hidden"
             animate="visible"
             variants={Cartvariants}
            >
              <div className="acct">
                  <AiOutlineUser className="icon acct" />
              </div>
             
              <div className="cart" onClick={handleShowCart}>
              <Link to="/cart">
                <Dropdown >
                    <Dropdown.Toggle variant="success" style={{padding: 5, backgroundColor: "rgba(0,0,0,0.5)", color: "white", outline: "none", border: "none"}} >
                      <BsCart2   className="icon"/>
                         <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    </Dropdown>
                    </Link>
              </div>
              
            </motion.div>
        </div>

        <AnimatePresence>
     {
       show ?   <motion.div className="navbar__mobile"
       initial="hidden"
       animate="visible"
       variants={Logovariants}
       exit={{
         x: "-100vw",
         transition:{
           duration: 1
         }
       }}
      >
       
       <AiOutlineClose className="close" onClick={handleShowNav}/>
          <div className="search__mobile">
          <input type="text"
                       name="search"
                      placeholder="Search product..."
                      id="search"
                      />
                       <BsSearch className=" mobile__srh" />
                </div>
                 <ul className="nav__links">
                         <li><NavLink to="/" onClick={handleShowNav}>HOME</NavLink></li>
                         <li><NavLink to="products" onClick={handleShowNav}>SHOP</NavLink></li>
                         <li><NavLink to="aboutus" onClick={handleShowNav}>ABOUT US</NavLink></li>
                         <li><NavLink to="contact" onClick={handleShowNav}>CONTACT US</NavLink></li>
                  </ul>
                       <div className="mobile__socials">
                           <FaFacebookF className="scc"/>
                           <AiOutlineTwitter  className="scc"/>
                           <BsInstagram className="scc"/>
                           <BsLinkedin className="scc"/>
                       </div>
       
   </motion.div> : null
     }
      </AnimatePresence>
    </nav>
    )
}

export default Header