import ShowAllPokemon from "./ShowAllPokemon";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchPokemon from "./SearchPokemon";
import AddPokemon from "./AddPokemon";

function App() {
  return (
    <BrowserRouter>

    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Pokemon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/all-pokemon">Ver todos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/get-one">Buscar uno</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/add-pokemon">Añadir </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <br />
      <Switch>
      <Route path='/all-pokemon'>
        <ShowAllPokemon/>
      </Route>
      <Route path='/get-one'>
        <SearchPokemon/>
      </Route>
      <Route path='/add-pokemon'>
        <AddPokemon/>
      </Route>
      </Switch>
    </div>

    </BrowserRouter>

  );
}

export default App;
