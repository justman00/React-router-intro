import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function Avengers({ heroes }) {
  const details = useRouteMatch();
  console.log(details)

  return (
    <div>
      <h1>List of awesome avengers</h1>
      {heroes.map((hero) => (
        <div className="characters-list-wrapper">
          <Link to={`/avengers/${hero.id}`}>
            <div className="character-card">
              <p>{hero.name}</p>
              <img src={hero.thumbnail} alt="random avenger" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Avengers;
