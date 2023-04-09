// import Swiper from 'swiper';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const main = () => {
   new Swiper('.swiper', {
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       pagination: {
         el: '.swiper-pagination',
         clickable: true
       },
       scrollbar: {
         el: '.swiper-scrollbar',
       },
       slideToClickedSlide: true,
       // autoHeight: true, //enable auto height
       autoplay: {
         delay: 3000,
         pauseOnMouseEnter: true,
       },
       speed: 800,
   });
}

export default main

