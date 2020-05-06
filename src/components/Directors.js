import React from 'react';
import { directors } from '../data';

const rednerDirectors = () => {
  return  directors.map(director => {
   
    return <div>
       {director.name}   
       {director.movies.map(genre => { return <ul>{genre}</ul>})}
     </div>
   })
}

const Directors = () => {
  return (
    <div>
       <h1>
          Directors Page
      </h1>
      {rednerDirectors()}
    </div>
  );
}

export default Directors
