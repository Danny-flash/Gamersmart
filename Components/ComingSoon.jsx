import React, { useState } from 'react'
import './comingsoon.css'
import { AiOutlineArrowRight} from 'react-icons/ai';
import vampire from "../Assets/vampire.jpg"
import granTu from "../Assets/granT.jpg"
import starfield from "../Assets/thequarry.jpeg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Soon from './Soon'
import { BsHeart, BsCart2} from 'react-icons/bs';
import { CartState } from '../Context/Context';
import { Link }from "react-router-dom";
import Tilt from 'react-tilt'




const ComingSoon = () => {

    const { state: {cart, products} , dispatch} = CartState()
               
  return (
    <section className='comingsoon'>
        <div className="comingsoon__container">
            <div className="soon__header">
            <h1>Games Coming Soon </h1>
            <Link to="products">View more products <AiOutlineArrowRight /></Link>
            </div>
          
          <div className="comingsoon__body">
                  <Splide className="slide__body" 
                    options={ {
                     

                      } }
                  >
                      <SplideSlide className="subslide">
                          <img src={vampire} alt=""  className='vamp'/>
                          <div className="overlay"></div>
                          <h1></h1>
                          <p></p>
                      </SplideSlide>
                      <SplideSlide className="subslide">
                          <img src={granTu} alt="" />
                          <div className="overlay"></div>
                          <h1></h1>
                          <p></p>
                      </SplideSlide>
                      <SplideSlide className="subslide">
                          <img src={starfield} alt="" />
                          <div className="overlay"></div>
                          <h1></h1>
                          <p></p>
                      </SplideSlide>
                  </Splide>

                  <div className="flex__body">
                       <div className="subflex__body">
                           {
                               Soon.map((data) => {
                                const {id, title, info, genre, price, category, img} = data
                                   return (
                                    <Tilt
                                    options={{
                                     scale: 1
                                   }}
                                   >
                                    <div className="flex__cat" key={id}>
                                    <div className="flex__img">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="flexx__body">
                                        <p className='genre'>{genre}</p>
                                        <p className='title'>{title}</p>
                                       
                                        <p className='info'>{info}</p>
                                    </div>
                                       <BsHeart className='flex__icon'/>
                                       {cart.some(p => p.id === data.id) ? (
                                  <button className='addtocart1'
                                  onClick={()=>{
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: data,

                                    })
                                  }}
                                  ><BsCart2 className='ii'/>REMOVE FROM CART</button>
                                 ) : (
                                  <button className='addtocart1'
                                  onClick={()=>{
                                    dispatch({
                                      type: "ADD_TO_CART",
                                      payload: data,

                                    })
                                  }}
                                  ><BsCart2 className='ii'/>PRE-ORDER</button>                           
                                 )
                               }
                                                              
                              </div>
                              </Tilt>
                               )
                               })
                           }
                       </div>
                  </div>
          </div>


        </div>
    </section>
  )
}

export default ComingSoon