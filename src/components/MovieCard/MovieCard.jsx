import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

function MovieCard({ item }) {
  const title = item.title.length > 22 ? item.title.slice(0, 22) + '...' : item.title
  return (
    <div className="movie_card">
      <Link to={`/detail/${item.id}`}>
        <div className="movie_card_head">
          <div className="movie_card_head-content">
            <img src={item.poster} alt="movie_img" />
          </div>
          <div className="bg_box"></div>
        </div>
        <div className="movie_card_body">
          <p>{title}</p>
          <span>{item.year}</span>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard