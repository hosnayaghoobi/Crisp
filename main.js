import "./scss/main.scss"
import Swiper from 'swiper';
import { Navigation, Pagination ,Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//Swiper1
    const swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    modules:[Navigation,Pagination,Autoplay],
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});