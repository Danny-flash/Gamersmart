import React from 'react'
import './blog.css'
import Blogs from './Blogs'
import { AiOutlineArrowRight} from 'react-icons/ai';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Blog = () => {
  return (
    <section className='blogs'>
    <div className="blogs__container">
    <div className="soon__header">
        <h1>From Our Blog </h1>
        <a href="">View more Articules <AiOutlineArrowRight /></a>
        </div>
        <Splide className="blog__body"
   options={ {
    arrows: false,
    pagination: true,
    drag: "free",
   gap: '1rem' ,
    fixedWidth: "21rem", 
  } }
  
  >
    
    {
        Blogs.map((data) =>{
            const {id, title, genre, img, Date, Comment} = data

            return(
                <SplideSlide className="blog__cat" key={id}>
                      <div className=" blog__img">
                          <img src={img} alt="" />
                      </div>
                      <div className="blog__body">
                              
                              <div className="articule__link">
                                  <a href="" className='art__date'>{Date}</a>
                                  <a href="" className='art__comment'>{Comment}</a>
                              </div>

                              <a href="" className='art__title'>{title}</a>

                          </div>
                </SplideSlide>
            )
        })
    }
  </Splide>




    </div>
</section>
  )
}

export default Blog