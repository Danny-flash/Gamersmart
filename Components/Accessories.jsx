import React from 'react'
import './accessories.css'
import AccessProducts from './Accessproducts'
import { AiOutlineArrowRight} from 'react-icons/ai';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BsHeart, BsCart2} from 'react-icons/bs';
import { Link }from "react-router-dom";
import { CartState } from '../Context/Context';




const Accessories = () => {
  const { state: {cart, products} , dispatch} = CartState()


  return (
    <section className='accessories'>
        <div className="accessories__container">
        <div className="soon__header">
            <h1>Consoles & Accessories </h1>
            <Link to="products">View more products <AiOutlineArrowRight /></Link>
            </div>
            <Splide className="access__body"
       options={ {
        rewind: true,
        perPage: 2,
        arrows: false,
        pagination: true,
        drag: "free",
        gap: "1rem",
        autoplay: "true",
        interval: 3000,
        speed: 500,
        perMove: 1,
        fixedWidth: "14rem",
        wheel: 'true',
        type: "loop"
        
      } }
      
      >
        
        {
            AccessProducts.map((data) =>{
           const {id, title, price, img} = data

                return(
                    <SplideSlide className="access__cat" key={id}>
                          <div className=" access__img">
                              <img src={img} alt="" />
                          </div>
                          <div className="access__body">
                              <p className='title'>{title}</p>
                              <p className='price'>{price}</p>
                          </div>
                             <BsHeart className='access__icon'/>
                             {cart.some(p => p.id === data.id) ? (
                                  <button className='addtocart2'
                                  onClick={()=>{
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: data,

                                    })
                                  }}
                                  ><BsCart2 className='ii'/>REMOVE FROM CART</button>
                                 ) : (
                                  <button className='addtocart2'
                                  onClick={()=>{
                                    dispatch({
                                      type: "ADD_TO_CART",
                                      payload: data,

                                    })
                                  }}
                                  ><BsCart2 className='ii'/>ADD TO CART</button>      
                                 )
                               }
                            
                          
                    </SplideSlide>
                )
            })
        }
      </Splide>




        </div>
    </section>
  )
}

export default Accessories