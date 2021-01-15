import { Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import Avengers from './pages/Avengers';

import avengerHeros from './data';
import { useState } from 'react';
import Avenger from './pages/Avenger';

function App() {
  const [heroes] = useState(avengerHeros);

  return (
    <div className="App">
      <nav className="navbar">
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>

        <li>
          <Link to="/">Home Page</Link>
        </li>
      </nav>
      <Switch>
        <Route path="/avengers/:heroId">
          <Avenger heroes={heroes} />
        </Route>

        <Route path="/avengers">
          <Avengers heroes={heroes} />
        </Route>

        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
