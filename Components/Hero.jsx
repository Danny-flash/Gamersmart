import "./hero.css"
import { AiOutlineArrowRight} from 'react-icons/ai';
import { GiHamburgerMenu} from 'react-icons/gi';
import { CartState } from '../Context/Context'
import { motion } from "framer-motion"

const Loadvariants = {
  hidden: { opacity: 0,
  },
  visible: { opacity: 1,
     transition: {
          type: "spring",
          duration: 3
     },
  }
}


const Hero = () => {
    const { state: {cart, products} , dispatch} = CartState()

  return (
    <section  className="hero__section">
                 <motion.div className="hero__container"
                  initial="hidden"
                  animate="visible"
                  variants={Loadvariants}
                 >
                     <div className="categories">
                            <div className="cat__header">
                                <GiHamburgerMenu className="hero__menu"/>
                                <p>Browse Categories</p>
                            </div>
                            <ul className="cat__links">
                                <li><a href="">Playstation</a></li>
                                <li><a href="">XBOX</a></li>
                                <li><a href="">Nindendo</a></li>
                                <li><a href="">Phones & Tablets</a></li>
                                <li><a href="">Pre-owned</a></li>
                                <li><a href="">Deals</a></li>
                                <li><a href="">Coming Soon</a></li>
                                <li><a href="">Accessories</a></li>
                            </ul>
                     </div>
                         <div className="hero__sales">

                             {
                                 products.map((prod)=>{
                                    const {id, title, info, genre, price, category, img, slashed, h3} = prod
                                    if( category === "hero1"){
                                        return(
                                            <div className="hero__img item1" key={id}>
                                            <img src={img} alt="" className="bigger__image"/>
                                            <div className="overlay"></div>
                                            <div className="hero__offer1">
                                                <p>{h3}</p>
                                                  <span>{title}</span>
                                                  {
                                 cart.some(p => p.id === prod.id) ? (
                                  <button className='hero__btn1'
                                  onClick={()=>{
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,

                                    })
                                  }}
                                  >REMOVE FROM CART<AiOutlineArrowRight className='ii'/></button>
                                 ) : (
                                 
                                    <button className='hero__btn1'
                                    onClick={()=>{
                                      dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
  
                                      })
                                    }}
                                    >BUY NOW <AiOutlineArrowRight className='ii'/></button>
                                 )
                               }
                                            </div>
                                        </div>
                                            )
                                    }if(category === "hero2"){
                                        return(
                                            <div className="hero__img item2" key={id}>
                                            <img src={img} alt="" className="mid__image" />
                                            <div className="overlay"></div>
                                            <div className="hero__offer2">
                                                <p>{h3}</p>
                                                  <span>{title}</span>
                                                  <p>{slashed}</p>
                                                  {
                                 cart.some(p => p.id === prod.id) ? (
                                  <button className='hero__btn'
                                  onClick={()=>{
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,

                                    })
                                  }}
                                  >REMOVE FROM CART<AiOutlineArrowRight className='ii'/></button>
                                 ) : (
                                 
                                    <button className='hero__btn'
                                    onClick={()=>{
                                      dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
  
                                      })
                                    }}
                                    >BUY NOW <AiOutlineArrowRight className='ii'/></button>
                                 )
                               }
                                               
                                            </div>
                                        </div>
                                        )
                                    }
                                    if(category === "hero3"){
                                        return(
                                            <div className="hero__img item3" key={id}>
                                            <img src={img} alt=""  className="smaller__image"/>
                                            <div className="overlay"></div>
                                            <div className="hero__offer3">
                                                  <span>SPIDER-MAN:
                                                      <br />
                                                       Miles Morales</span>
                                                       {
                                 cart.some(p => p.id === prod.id) ? (
                                  <button className='hero__btn btn3'
                                  onClick={()=>{
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,

                                    })
                                  }}
                                  >REMOVE FROM CART<AiOutlineArrowRight className='ii'/></button>
                                 ) : (
                                 
                                    <button className='hero__btn btn3'
                                    onClick={()=>{
                                      dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
  
                                      })
                                    }}
                                    >BUY NOW <AiOutlineArrowRight className='ii'/></button>
                                 )
                               }
                                                    
                                            </div>
                                        </div>
                                        )
                                    }
                                    
                                 })
                             }
                            
                            
                            
                            
                         </div>
                 </motion.div>
    </section>
  )
}

export default Hero