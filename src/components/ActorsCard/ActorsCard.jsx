import React from 'react';
import './style.scss'
import not_found from '../../assets/imgs/not_found_img.jpg'

function ActorsCard({ item }) {
   return (
      <div className="actors_card">
         <div className="actors_card_head">
            <img src={item.photo || not_found} alt="movie_img" />
         </div>
         <div className="actors_card_body">
            <p>{item.fullName}</p>
         </div>
      </div>
   )
}

export default ActorsCard