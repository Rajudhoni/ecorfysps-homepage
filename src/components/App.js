import React from 'react';
import Header from './ui/Header';
import {ThemeProvider } from '@material-ui/core/styles';

import Theme from './ui/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Footer from './ui/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
        
      <BrowserRouter>
            <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={()=> <div>about us</div>} />
          <Route path="/services" component={()=> <div>Serivces</div>} />
          <Route  path="/revolution" component={()=> <div>The Revolution</div>} />
          <Route  path="/customsoftware" component={()=> <div>Custom Software</div>} />
          <Route  path="/mobileapps" component={()=> <div>Mobile Apps</div>} />
          <Route  path="/websites" component={()=> <div>Websites</div>} />
          <Route  path="/contact" component={()=> <div>Contact us</div>} />
          <Route  path="/estimate" component={()=> <div>The Estimate</div>} />
          
        </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
