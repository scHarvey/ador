// Let's Go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './style.css';

//components
import Main from './components/Main'
import Single from './components/Single'

const Root = function () {
  //stateless functional component, could be it's own component (probbly should be as Routes grow)
  return (
    <BrowserRouter>
      <div>
          {/*
            routing can take place in any component
            Missing a 404 handling route
            */}
          <Route exact path="/" component={Main} />
          <Route path="/search/:searchTerm" component={Main} />
          <Route path="/beer/:beerId/:beerSlug" component={Single} />

      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#root'));
