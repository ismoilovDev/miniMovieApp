import React, { useEffect, useState } from 'react'
import Carusel from '../../components/Carusel/Carusel';
import Main from '../../components/Main/Main'
import Player from '../../components/Player/Player'
import { Container, Wrap } from '../../styles/styled'
import { getMovieDetails } from '../../services/api'
import { useParams } from 'react-router'
import DetailBox from '../../components/DetailBox/DetailBox'
import PosterBox from '../../components/Poster/PosterBox'
import Description from '../../components/Description/Description'
import Title from './../../components/Title/Title';

function MovieDetails() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const controller = new AbortController();

    getMovieDetails(`/movie-detail?id=${id}`)
      .then((data) => {
        console.log(data)
        if (data.code === 200) {
          setData(data?.data)
          setIsLoading(false)
        } else {
          console.log('Server Error: ', data?.message)
        }
      })
      .catch(error => console.log(`Error: ${error}`))

    return () => {
      controller.abort();
    };
  }, [])

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {
        data && 
        <Main>
          <Wrap bg_url={data.poster}>
            <DetailBox title={data.title} handleModalOpen={handleModalOpen} />
            <PosterBox sourse={data.poster} />
          </Wrap>
          <Container>
            <Description data={data} />
            <Title title="Актёры и создатели" />
            <Carusel contents={data.actors} type="details" />
          </Container>
          <Player isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Main>
      }
    </>
  )
}

export default MovieDetails