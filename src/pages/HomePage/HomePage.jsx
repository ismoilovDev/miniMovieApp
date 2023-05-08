import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import { getAllMovies } from '../../services/api'
import { Container } from '../../styles/styled'
import Pagination from '../../components/Pagination/Pagination'
import Main from '../../components/Main/Main'
import Slider from '../../components/Slider/Slider'
import Carusel from '../../components/Carusel/Carusel'
import Title from './../../components/Title/Title';
import { CaruselBox } from './../../styles/styled';

function HomePage() {
   const [trends, setTrends] = useState([]);
   const [topMovies, setTopMovies] = useState([]);
   const [isLoading, setIsloading] = useState(false)

   useEffect(() => {
      const controller = new AbortController();

      async function fetchData() {
         try {
            const [trendsData, topMoviesData] = await Promise.all([
               getAllMovies('/movie-list?page=6&items=10', controller.signal),
               getAllMovies('/movie-list?page=7&items=10', controller.signal),
            ]);

            if (trendsData.code === 200) {
               setTrends(trendsData?.data?.movies);
            } else {
               console.log('Server Error: ', trendsData?.message);
            }

            if (topMoviesData.code === 200) {
               setTopMovies(topMoviesData?.data?.movies);
            } else {
               console.log('Server Error: ', topMoviesData?.message);
            }
         } catch (error) {
            console.log(`Error: ${error}`);
         }
      }

      fetchData();

      return () => {
         controller.abort();
      };
   }, []);

   return (
      <Main>
         <Slider />
         <Container>
            <CaruselBox>
               <Title title={'Рекомендуем тебе'} />
               <Carusel contents={trends} type={'home'} />
            </CaruselBox>
            <CaruselBox>
               <Title title={'Смотрим всей семьей'} />
               <Carusel contents={topMovies} type={'home'} />
            </CaruselBox>
         </Container>
      </Main>
   )
}

export default HomePage