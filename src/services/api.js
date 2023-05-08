const API_URL = 'https://api.cinerama.uz/api-test';
const TOKEN = '4a94a2cc-a2bb-44aa-9d4e-852e3ec4706f';

async function request(url) {
   const response = await fetch(`${API_URL + url}`, {
      headers: {
         'Content-Type': 'application/json',
         "secret-token": TOKEN
      }
   })
   return await response.json();
}

async function getAllMovies(url) {
   return await request(url)
}

async function getMovieDetails(url) {
   return await request(url)
}

export {
   getAllMovies,
   getMovieDetails
}