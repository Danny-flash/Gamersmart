import './category.css'
import Datas from './Data'
import { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BsHeart, BsCart2} from 'react-icons/bs';
import { CartState } from '../Context/Context'
import Tilt from 'react-tilt'


const Category = () => {
  const { state: {cart, products} , dispatch} = CartState()


    const  [datas, setDatas] = useState(Datas)

    const filterData = (dataItem) =>{
               const result = Datas.filter((data) =>{
                 return (
                   data.category === dataItem
                 )
                
               })
            setDatas(result)
    }
    const [active, setActive] = useState(0)


  return (
    <section className='category'>
      <div className="category__container">
        <div className="category__buttons">
            <p onClick={()=>filterData('trending')}>Now Trending</p>
            <p  onClick={()=>filterData('newReleases')}>New Releases</p>
            <p  onClick={()=>filterData('BestRated')}>Best Rated</p>
        </div>
    
      <Splide className="category__body"
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
            datas.map((data) =>{
           const {id, title, info, genre, price, category, img} = data

                return(
                
                    <SplideSlide className="fliter__cat" key={id}>
                        <Tilt
                         options={{
                          scale: 1
                        }}
                        >
                          <div className="fliter__img">
                              <img src={img} alt="" />
                          </div>
                          <div className="fliter__body">
                              <p className='genre'>{genre}</p>
                              <p className='title'>{title}</p>
                              <p className='price'>{price}</p>
                              <p className='info'>{info}</p>
                          </div>
                             <BsHeart className='filter__icon'/>
                             {cart.some(p => p.id === data.id) ? (
                                  <button className='addtocart'
                                  onClick={()=>{
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: data,

                                    })
                                  }}
                                  ><BsCart2 className='ii'/>REMOVE FROM CART</button>
                                 ) : (
                                  <button className='addtocart'
                                  onClick={()=>{
                                    dispatch({
                                      type: "ADD_TO_CART",
                                      payload: data,

                                    })
                                  }}
                                  ><BsCart2 className='ii'/>ADD TO CART</button>                  
                                 )
                               }

                            </Tilt>
                    </SplideSlide>
                   
                )
            })
        }
      </Splide>



      </div>

     </section>
  )
}

export default Category