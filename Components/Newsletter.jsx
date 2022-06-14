import React from 'react'
import './newsletter.css'
import { AiOutlineArrowRight} from 'react-icons/ai';

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className="newsletter__container">
            <div className="news__body">
            <header>JOIN OUR NEWSLETTER</header>
            <p>Subcribe to get information about products and coupons</p>
            </div>

            <form className="newsletter__input">
                <input type="text"
                  placeholder='Enter your Email Address'

                />
                <button type='submit'>SUBSCRIBE
                <AiOutlineArrowRight className='news_icon'/>
                </button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter