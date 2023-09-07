import React from 'react';
import movies from '../../data';



function ActorCard({ actorName }) {
    const imageUrl = `https://picsum.photos/200/300?random=${Math.random()}`;
  
    return (
      <div className="actor-card">
        <img src={imageUrl} alt={actorName} />
        <h2>{actorName}</h2>
      </div>
    );
  }

export default function ActorsListPage() {
   
    const uniqueActors = new Set();

    movies.forEach((movie) => {
      movie.cast.forEach((actor) => {
        uniqueActors.add(actor);
      });
    });

    const actorList = Array.from(uniqueActors);
  
    return (
      <div className="actors-list">
        <h1>Actors List</h1>
        <div className="actor-cards">
          {actorList.map((actor, index) => (
            <ActorCard key={index} actorName={actor} />
          ))}
        </div>
      </div>
    );
  }
  





