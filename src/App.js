import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/home';
import EnterEmail from './components/password/forgot-password';
import Reset from './components/password/password_reset';

function App() {
  return (
    <Router>
          <Route exact path="/" component= {Home} />
          <Route exact path='/forgot-password' component={EnterEmail}/>
          <Route exact path='/forgot-password/reset/:token' component={Reset}/>

    </Router>
  );
}

export default App;
