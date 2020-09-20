import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/HomePage/Home';
import Services from './Components/Pages/Services/Services'
import Products from './Components/Pages/Products/Products'
import Contacts from './Components/Pages/Contacts/Contacts'
import SignUp from './Components/Pages/SignUp/SignUp'
import Navbar from './Components/Navbar';
import Footer from './Components/Pages/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact' exact component={Contacts} />
        <Route path='/signUp' exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
