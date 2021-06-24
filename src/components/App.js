import { Container } from '@material-ui/core';

import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Main from '../pages/Main';
import Info from '../pages/Info';
import Request from '../pages/Request';
import Chocolate from '../pages/projects/Chocolate';
import Coffee from '../pages/projects/Coffee';
import Soul from '../pages/projects/Soul';
import Chloris from '../pages/projects/Chloris';
import Sushi from '../pages/projects/Sushi';
import Banking from '../pages/projects/Banking';
import Radiance from '../pages/projects/Radiance';
import Luna from '../pages/projects/Luna';
import Cookbook from '../pages/projects/Cookbook';
import Footer from './Footer';

const App = () => {
  return (
    <Container maxWidth='md'>
      <Header />

      <Route path='/' exact component={Main}></Route>
      <Route path='/information' component={Info}></Route>
      <Route path='/request' component={Request}></Route>

      <Route path='/project/chocolate' component={Chocolate}></Route>
      <Route path='/project/coffee' component={Coffee}></Route>
      <Route path='/project/soul' component={Soul}></Route>
      <Route path='/project/chloris' component={Chloris}></Route>
      <Route path='/project/sushi' component={Sushi}></Route>
      <Route path='/project/banking' component={Banking}></Route>
      <Route path='/project/radiance' component={Radiance}></Route>
      <Route path='/project/luna' component={Luna}></Route>
      <Route path='/project/cookbook' component={Cookbook}></Route>
      <Footer />
    </Container>
  );
};

export default App;
