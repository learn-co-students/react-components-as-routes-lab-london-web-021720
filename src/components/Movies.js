import React from 'react';
import { movies } from '../data';


const genres = (movie) => {return  movie.genres.map(genre => {return <ul>{genre}</ul>})}

const renderMovies = () => {
  return  movies.map(movie => {
   
    return <div>
       {movie.title}
       <br/>
       {movie.time}
       {movie.genres.map(genre => { return <ul>{genre}</ul>})}
     </div>
   })
}

const Movies = () => {

  return (
    <div>
        <h1>
        Movies Page 
        </h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
