import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import ProductLoader from './components/Loader';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './assets/index.css';

import {BrowserRouter} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const MyApp = lazy(()=> import('./App'));


ReactDOM.render(

  <>
  <BrowserRouter>
    <Suspense fallback={
      <>
      <ProductLoader/>
      <ProductLoader/>
      <ProductLoader/>
      <ProductLoader/>
      </>
    }>
      <MyApp/>
    </Suspense>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
