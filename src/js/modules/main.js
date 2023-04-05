import Swiper from 'swiper';
import 'swiper/swiper.min.css';


const main = () => {
   new Swiper('.swiper', {
      loop: true,
      // autoHeight: true, //enable auto height
   });
}

export default main

