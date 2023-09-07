import React from "react";
import movies from '../../data';
import { Link } from 'react-router-dom';


function MovieCard({movie}){
  return(
    <div className="term">
    <Link to={`/movie/${movie.title}`}>
   

  <dt>
     
        <img className="cover-img" src={movie.posterPath} alt={movie.title} />
        <span>{movie.title}</span>
      </dt>
      <dd>{movie.releaseDate}</dd>
      </Link>
  </div>
  
  )
}

function MovieCards({movies}) {
  const movieCards = movies.map((movie, idx)=>(
    <MovieCard movie={movie} key ={idx}/>
  ))
    return (
    <>
     <dl className="dictionary">
   
      {movieCards}
  
    </dl>
    </>
    )
  }


export default function MovieListPage(){

    return(
    <>
        <h1>MovieListPage</h1>
        <MovieCards movies={movies}/>    
    </>
    )
}

