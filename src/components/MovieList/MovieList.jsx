import React from 'react'
import MovieCard from './../MovieCard/MovieCard';
import { MovieListComponent } from './styled.js';

function MovieList({ movies }) {
   return (
      <MovieListComponent>
         {
            movies.map(movie => (
               <MovieCard key={movie.id + movie.titleEn} item={movie} />
            ))
         }
      </MovieListComponent>
   )
}

export default MovieList