import Img1 from '../Assets/horiflat.jpg'
import Img2 from '../Assets/gow2.jpg'
import Img3 from '../Assets/tomclancy2.jpg'
import Img4 from '../Assets/lego.jpg'
import Img5 from '../Assets/eldenn.png'
import Img6 from '../Assets/mk11.jpg'
import Img7 from '../Assets/borderlands3.jpg'
import Img8 from '../Assets/ghostwire.jpg'
import Img9 from '../Assets/forspoken.jpeg'
import Img10 from '../Assets/EvilDead.jpg'
import Img11 from '../Assets/forza.jpg'
import Img12 from '../Assets/grangran.jpg'
import Img13 from '../Assets/steelrising.jpg'
import Img14 from '../Assets/homeworld.jpg'
import Img15 from '../Assets/ps4.png'
import Img16 from '../Assets/Nintendo.png'
import Img17 from '../Assets/amd.png'
import Img18 from '../Assets/ps4pad.png'
import Img19 from '../Assets/xboxone.png'
import Img20 from '../Assets/keyboardandmouse.png'
import Img21 from "../Assets/spidey.png"
import Img22 from  "../Assets/ps5.png"
import Img23 from "../Assets/TinaTiny.jpg"
import Img24 from "../Assets/farcry.jpg"
import Img25 from "../Assets/Halo.jpg"
import Img26 from "../Assets/miles.jpg"
import Img27 from "../Assets/forza.jpg"
import Img28 from "../Assets/gow.jpg"

const ProductData = [
    {
        id: 1,
        title:" Horizon Forbidden West",
        genre: "Action-adventure",
        price: "$50.00",
        info: "New",
        img: Img1,
        category: "trending"
    },
    {
        id: 2,
        title:" God of War Ragnarok",
        genre: "Action-adventure",
        price: "$13.99",
        info: "New",
        img: Img2,
        category: "trending"
    },
    {
        id: 3,
        title:"Tom Clancy's Rainbow Six Extraction",
        genre: "Tactical shooter",
        price: "pre-ordered",
        info: "Top",
        img: Img3,
        category: "upcoming"
    },
  
    {
        id: 4,
        title:"LEGO star Wars; The Skywalker Saga",
        genre: "Action-adventure",
        price: "pre-ordered",
        info: "Top",
        img: Img4,
        category: "upcoming"
    },
  
    {
        id: 5,
        title:"EldenRing",
        genre: "Tactical shooter",
        price: "$29.99",
        info: "Top",
        img: Img5,
        category: "trending"
    },
    {
        id: 6,
        title:"Mortal Kombat 11",
        genre: "Fghting game",
        price: "$25.99",
        info: "Top",
        img: Img6,
        category: "trending"
    },
    {
        id: 7,
        title:"Borderlands3",
        genre: "Action role-playing, first-person shooter",
        price: "$19.99",
        info: "Top",
        img: Img7,
        category: "trending"
    },
    {
        id: 8,
        title:"Ghost wire: Tokyo",
        genre: "Action-adventure",

        info: "Top",
        img: Img8,
        category: "newReleases"
    },
    {
        id: 9,
        title:"Forspoken",
        genre: "Action-adventure",
        info: "New",
        img: Img9,
        price: "pre-ordered",
        category: "upcoming"
    },
    {
        id: 10,
        title:"Evil Dead",
        genre: "Action-adventure",
        info: "New",
        img: Img10,
        price: "pre-ordered",
        category: "upcoming"
    },
    {
        id: 11,
        title:"Forza Horizon 3",
        genre: "Racing game",
        info: "New",
        img: Img11,
        price: "pre-ordered",
        category: "upcoming"
    },
  
    {
        id: 12,
        title:"Gran Turismo 7",
        genre: "Sim racing",
        info: "New",
        img: Img12,
        price: "pre-ordered",
        category: "upcoming"
    },
  
    {
        id: 13,
        title:"Steelrising",
        genre: "Role-playing game",
        info: "New",
        img: Img13,
        price: "pre-ordered",
        category: "upcoming"
    },
    {
        id: 14,
        title:"Homeworld 3",
        genre: "Space flight simulation game",
        info: "New",
        img: Img14,
        price: "pre-ordered",
        category: "upcoming"
    },
    {
        id: 15,
        title:" Ps4 Console",
        price: "$299.99",
        img: Img15,
        category: "accessories"
    },
    {
        id: 16,
        title:" Nintendo",
        price: "$279.99",
        img: Img16,
        category: "accessories"
    },
    {
        id: 17,
        title:"Amd Graphics Card",
        price: "$169.99",
        img: Img17,
        category: "accessories"
       
    },
  
    {
        id: 18,
        title:"Ps4 pad",
        price: "$29.99",
        img: Img18,
        category: "accessories"
    },
  
    {
        id: 19,
        title:"Xbox One",
        price: "$229.99",
        img: Img19,
        category: "accessories"
    },
    {
        id: 20,
        title:"Gaming Keyboard and Mouse",
        price: "$59.99",
        img: Img20,
        category: "accessories"
    },
    {
        id: 21,
        title:"WEEKEND OFFER",
        price: "$59.99",
        slashed:"SAVE $19.99",
        img: Img21,
        h3:"",
        category: "amazingdeals"
    },
    {
        id: 22,
        title:"AMAZING DEAL ON A",
        h3: "PS5",
        price: "$669.99",
        img: Img22,
        slashed: "SAVE $9.99",
        category: "amazingdeals"
    },
    {
        id: 23,
        title:"WEEKEND OFFER",
        price: "$59.99",
        img: Img23,
        h3: "",
        slashed: "SAVE $29.99",
        category: "amazingdeals"
    },
       { id: 24,
        title:"FAR CRY 6",
        price: "Pre-ordered",
        img: Img24,
        category: "hero1",
        h3: "PRE-ORDER NOW"
    },
       { id: 25,
        title:"HALO INFINITE",
        price: "$79.99",
        img: Img25,
        h3: "WEEKEND OFFER",
        slashed: "SAVE $19.99",
        category: "hero2"
    },
      {  id: 26,
        title:"SPIDERMAN",
        price: "$69.99",
        img: Img26,
        h3: "",
        category: "hero3"
    },
      {  id: 27,
        title:"FORZA HORIZON 3",
        price: "$69.99",
        img: Img27,
        h3: "",
        category: "forza"
    },
      {  id: 28,
        title:"GOD OF WAR",
        price: "$69.99",
        img: Img28,
        h3: "AMAZING VALUE",
        category: "gow"
    },
    
]
  


export default ProductData;