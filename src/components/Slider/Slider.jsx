import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Slide from './Slide';
import "swiper/css";
import "swiper/css/pagination";
import bg_1x600 from '../../assets/imgs/slider/bg_1x600.avif';
import bg_1x1200 from '../../assets/imgs/slider/bg_1x1200.avif'
import bg_2x600 from '../../assets/imgs/slider/bg_2x600.avif'
import bg_2x1200 from '../../assets/imgs/slider/bg_2x1200.avif'
import bg_3x600 from '../../assets/imgs/slider/bg_3x600.avif'
import bg_3x1200 from '../../assets/imgs/slider/bg_3x1200.avif'
import bg_4x600 from '../../assets/imgs/slider/bg_4x600.avif'
import bg_4x1200 from '../../assets/imgs/slider/bg_4x1200.avif'
import bg_5x600 from '../../assets/imgs/slider/bg_5x600.avif'
import bg_5x1200 from '../../assets/imgs/slider/bg_5x1200.avif'
import useWindowSize from '../../hooks/useWindowSize';

const slides = [
   {
      id: 1,
      bg_urls: [
         bg_1x600,
         bg_1x1200
      ],
      status: "Бесплатно",
      genre: 'Триллер',
      year: 2018
   },
   {
      id: 2,
      bg_urls: [
         bg_2x600,
         bg_2x1200
      ],
      status: "Бесплатно",
      genre: 'Драма',
      year: 2023
   },
   {
      id: 3,
      bg_urls: [
         bg_3x600,
         bg_3x1200
      ],
      status: "Бесплатно",
      genre: 'Детектив',
      year: 2019
   },
   {
      id: 4,
      bg_urls: [
         bg_4x600,
         bg_4x1200
      ],
      status: "Бесплатно",
      genre: 'Драма',
      year: 2023
   },
   {
      id: 5,
      bg_urls: [
         bg_5x600,
         bg_5x1200
      ],
      status: "Бесплатно",
      genre: 'Комедия',
      year: 2021
   }
]


function Slider() {
   
   return (
      <Swiper
         modules={[Pagination, Navigation, Autoplay]}
         navigation={true}
         spaceBetween={0}
         pagination={{ 
            clickable: true,
            dynamicBullets: true
         }}
         loop={true}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false
         }}
      >
         {
            slides.map(item => (
               <SwiperSlide key={item.id}>
                  <Slide slide={item} />
               </SwiperSlide>
            ))
         }
      </Swiper>
   )
}

export default Slider