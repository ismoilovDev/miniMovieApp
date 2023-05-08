import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MovieCard from '../MovieCard/MovieCard';
import ActorsCard from '../ActorsCard/ActorsCard';

const responsive = {
   0: {
      items: 1
   },
   420: {
      items: 2
   },
   556: {
      items: 3
   },
   992: {
      items: 4
   },
   1024: {
      items: 5,
      itemsFit: 'contain'
   },
   1200: {
      items: 6,
      itemsFit: 'contain'
   }
};

const Carusel = ({ contents, type }) => {
   let items = []

   if (type === "home" && contents) {
      items = contents.map((item, index) => {
         return <MovieCard item={item} />
      })
   }
   if (type === "details" && contents) {
      items = contents.map((item, index) => {
         return <ActorsCard item={item} />
      })
   }

   return (
      <>
         {
            contents 
            && 
            <AliceCarousel
               mouseTracking
               responsive={responsive}
               autoPlay
               autoPlayInterval={1000}
               disableButtonsControls
               disableDotsControls
               infinite
               items={items}
            />
         }
      </>
   );
}

export default Carusel;