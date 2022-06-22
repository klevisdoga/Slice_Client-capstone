import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useState} from 'react'
import './App.scss';
import PageNav from './Components/PageNav/PageNav';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState('false')


  return (
    <div className="App">
      <BrowserRouter>
      <PageNav loggedIn={loggedIn} />
      <Switch>
        <Route path='/' exact component={HomePage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
