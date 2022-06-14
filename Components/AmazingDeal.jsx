import React from 'react'
import './amazingdeal.css'
import { AiOutlineArrowRight} from 'react-icons/ai';

import { CartState } from '../Context/Context'



const AmazingDeal = () => {
    const { state: {cart, products} , dispatch} = CartState()

  return (
    <section className='amazingDeals'>
        <div className="amazing__container">

            {
                products.map((prod)=> {
                    const {id, title, info, genre, price, category, img, slashed, h3} = prod
                         if( category === "amazingdeals"){
                            return(
                                <div className="deal" key={id}>
                                <div className="img">
                                    <img src={img} alt="" />
                                </div>
                                <div className="overlay"></div>
                                <div className="deal__body">
                                       <p>{title}</p>
                                       <h3>{h3}</h3>
                                       <p>{slashed}</p>
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
    </section>
  )
}

export default AmazingDeal