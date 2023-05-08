import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Series from './pages/Series/Series';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies/:page' element={<Movies />}/>
        <Route path='/series/:page' element={<Series />}/>
        <Route path='/detail/:id' element={<MovieDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App