import { Route, Switch } from 'react-router-dom'
import './App.css';

import "@material-tailwind/react/tailwind.css"
import Navigation from './components/HomePage/Nav'

function App() {
  return (
    <div className="App">
      <Navigation />


      {/* <Switch>
        <Route exact path='/'>
      
        </Route>
      </Switch> */}

    </div>
  );
}

export default App;
