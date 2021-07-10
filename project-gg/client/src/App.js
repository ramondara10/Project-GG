import { request } from 'express';
import React from 'react';
import './App.css';
import Row from "./components/Row";
import Banner from './components/Banner';
import Nav from './components/Nav/Nav';


//import requests from './requests';

function App() {
    return (
    <div className="app">
      {/* navbar */}
      <Navbar/>

      {/* banner */}
      <Banner/>
      {/* rows */}
      <Row
      title="Top Games"
      fetchURL={requests.}
      isLargeRow
      />
      <Row title="most popular" fetchurl={requests.}/>
      {/* set rows with each category */}
                        
    </div>
    );
  }

 export default App;