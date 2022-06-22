import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import PageNav from './Components/PageNav/PageNav';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageNav />
      <Switch>
        <Route path='/' component={HomePage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
