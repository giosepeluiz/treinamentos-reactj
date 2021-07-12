import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.scss';

//import Home from './templates/Home';
//import Calc from './templates/Calc';
//import Search from './templates/Search';
//import SearchHook from './templates/SearchHook';
//import ImcCalc from './templates/ImcCalc';
//import Countries from './templates/Countries';
//import GameList from './templates/GameList';
// import Fruit from './templates/Fruit';
// import Posts from './templates/Posts';
// import BrazilianCities from './templates/BrazilianCities';
// import CustomHookFetch from './templates/CustomHookFetch';
// import CustomHookAsync from './templates/CustomHookAsync';
import ErrorBoundary from './templates/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary />
  </React.StrictMode>,
  document.getElementById('root'),
);
