// import Swiper from 'swiper';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slider = () => {
   new Swiper('.swiper', {
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
      loop: true,
       pagination: {
         el: '.swiper-pagination',
         clickable: true
       },
       scrollbar: {
         el: '.swiper-scrollbar',
       },
       slideToClickedSlide: true,
       speed: 800,
       autoHeight: true,
       breakpoints: {
        767: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
   });
}

export default slider

