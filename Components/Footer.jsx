import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { AiOutlineTwitter} from 'react-icons/ai';
import './footer.css'
import Visa from "../Assets/visa.png"
import AmericanExpress from "../Assets/Americanexpress.png"
import Mastercard from "../Assets/mastercard.png"
import Paypal from "../Assets/paypal.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer'>
        <div className="footer__container">
            <div className="subfooter1">
            <div className="logo footer_logo">
                   <Link to="/">Gamers<span>mart</span></Link>
            </div>
                <p className='footer__note'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                <div className="subfooter__icons">
                    <a href=""> <BsInstagram className='footer__icon'/></a>
                    <a href=""> <BsLinkedin className='footer__icon'/></a>
                    <a href=""> <AiOutlineTwitter className='footer__icon'/></a>
                     <a href=""><BsInstagram className='footer__icon'/></a>
                </div>
            </div>
            <div className="subfooter">
                <header>Customer Service</header>
                <a href="">payment Methods</a>
                <a href="">Money-back guarantee</a>
                <a href="">Returns</a>
                <a href="">Shipping</a>
                <a href="">Terms and conditions</a>
                <a href="">Privacy Policy</a>
            </div>
            <div className="subfooter">
                <header>Useful Links</header>
                <a href="">About Gamersmart</a>
                <a href="">How to shop on Molla</a>
                <a href="">FAQ</a>
                <a href="">Contact us</a>
                <a href="">Log in</a>
            </div>
            <div className="subfooter">
                <header>My account</header>
                <a href="">Sign in</a>
                <a href="">View Cart</a>
                <a href="">My Wishlist</a>
                <a href="">Track My Order</a>
                <a href="">Help</a>
            </div>

        </div>
        


        <div className="payment">
          <p>Copyright © 2022 Gamersmart Store. All Rights Reserved.</p>              

          <div className="payment__card">
                    <img src={Visa} alt="" />
                    <img src={AmericanExpress} alt="" />
                    <img src={Mastercard} alt="" />
                    <img src={Paypal} alt="" />
          </div>
         </div>
    </section>
  )
}

export default Footer