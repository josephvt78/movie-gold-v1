import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import React from 'react';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';

function App() {

  //debugger;
  const [movies, setMovies] = useState(null);

  const getMovies = async () =>{

    try 
    {
      const response = await api.get("api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } 
    catch(err) 
    {
      console.log(err);
    }

  }

  useEffect(() => {
    getMovies();
  }, [])

  if (movies === null) {
    return <div>Loading...</div>;
  }


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}/>
          <Route path="Trailer/:ytTrailerId" element={<Trailer/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
