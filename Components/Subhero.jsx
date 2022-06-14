import "./subhero.css"
import { MdOutlineRotateLeft} from 'react-icons/md';
import { BsExclamationCircle} from 'react-icons/bs';
import { MdOutlineSupport} from 'react-icons/md';
import { GoRocket} from 'react-icons/go';
import { AiOutlineArrowRight} from 'react-icons/ai';
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


const Subhero = () => {
  const { state: {cart, products} , dispatch} = CartState()

  return (
    <section className="subhero">
        <motion.div className="subhero__container"
        initial="hidden"
        animate="visible"
        variants={Loadvariants}
        >
          
              <div className="images">
              {
                products.map((prod)=> {
                    const {id, title, info, genre, price, category, img, slashed, h3} = prod
                         if( category === "forza"){
                            return(
                                <div className="first__img" key={id}>
                                  <img src={img} alt="" />
                                <div className="overlay"></div>
                                <div className="order">
                                {
                                 cart.some(p => p.id === prod.id) ? (
                                  <button className='btn'
                                  onClick={()=>{
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,

                                    })
                                  }}
                                  >REMOVE FROM CART<AiOutlineArrowRight className='ii'/></button>
                                 ) : (
                                 
                                  <button className='btn'
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
                         }if(category === "gow"){
                           return(
                                  <div className="second__img" key={id}>
                                         <img src={img}alt="" />
                                     <div className="overlay"></div>
                                          <div className="order">
                                                    <p>{h3}</p>
                                               <span>{title}</span>
             
                              {cart.some(p => p.id === prod.id) ? (
                                  <button className='btn'
                                  onClick={()=>{
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,

                                    })
                                  }}
                                  >REMOVE FROM CART<AiOutlineArrowRight className='ii'/></button>
                                 ) : (
                                  <button className='btn'
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
          
            <div className="subhero__icons">
                <div className="iconn">
                    <GoRocket className="ico" />
                    <div className="subiconn">
                    <p>Free Shipping</p>
                    <span>Orders $50 or more</span>
                    </div>
                </div>
                <div className="iconn">
                <MdOutlineRotateLeft className="ico" /> 
                <div className="subiconn">
                <p>Free Returns</p>
                  <span>Within 7 days</span>
                </div>
                  
                </div>
                <div className="iconn">
                  <BsExclamationCircle className="ico" />
                  <div className="subiconn">
                  <p>Get 20% Off 1 Item</p>
                  <span>When you sign up</span>
                  </div>
                  
                </div>
                <div className="iconn">
                    <MdOutlineSupport className="ico"  />
                    <div className="subiconn">
                    <p>We Support</p>
                  <span>24/7 amazing services</span>
                    </div>
               
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Subhero