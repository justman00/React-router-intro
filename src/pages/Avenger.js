import React from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';

function Avenger({ heroes }) {
  const params = useParams();
  const details = useRouteMatch();
  // aici o sa-l gaseasca pe cel de care are nevoie
  const currentAvenger = heroes.find((hero) => {
    if (String(hero.id) === params.heroId) {
      return true;
    }
    return false;
  });

  console.log(currentAvenger, details);

  return (
    <div className="characters-list-wrapper">
      <div className="character-card">
        <h2>{currentAvenger.name}</h2>
        <p>{currentAvenger.nickname}</p>
        <p>{currentAvenger.description}</p>
        <img src={currentAvenger.img} alt="random avengers img" />
        <nav className="nav-buttons">
          <NavLink to={`${details.url}/movies`}>Movie List</NavLink>
        </nav>
        <Route path={`${details.path}/movies`}>
          <div>
            <p className="item-description">{currentAvenger.movies}</p>
          </div>
        </Route>
      </div>
    </div>
  );
}

export default Avenger;
