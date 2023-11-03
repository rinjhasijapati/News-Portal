import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepages from './components/home/Homepages';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
