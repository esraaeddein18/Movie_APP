import React, { useState,useEffect } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, createHashRouter,Navigate, Routes, useNavigate ,RouterProvider} from 'react-router-dom';
import Navbar from './componnents/Designs/Navbar/Navbar';
import Footer from './componnents/Designs/Footer/Footer';
import Layout from './componnents/Layout/Layout';
import Home from './componnents/Designs/Home/Home';
import PlayingVideo from './componnents/videos,details/PlayingVideo/PlayingVideo';
import People from './componnents/People/People';
import TopRated from './componnents/TopRated/TopRated';
import AirTriding from './componnents/AirTriding/AirTriding';
import MoviesProvider from './componnents/MovieProvider/MovieProvider';
import Tabss from './componnents/Tabs/Tabss';
import Discover from './componnents/Discover/Discover';
import MovieDiscover from './componnents/MovieDiscover/MovieDiscover';
import DetailsVideo from './componnents/videos,details/DetailsVideo/DetailsVideo'
import Videos from './componnents/Videos/Videos'
//import Home from './componnents/Home/Home';
import Movies from './componnents/Movies/Movies';
import ProtectedRoute from './componnents/ProdetedRoute/ProtectedRoute';
import Details from './componnents/Details/Details';
const routers=createHashRouter([
    {path:'/',element:<Layout/>,children:[
      {path:'Home',element:<Home/>},
      {path:'Navbar',element:<Navbar/>},
      {path:'PlayingVideo',element:<PlayingVideo/>},
      {path:'DetailsVideo',element:<DetailsVideo/>},
      {path:'/showdetail/:type/:id',element:<Details/>},
      {path:'MoviesProvider',element:<MoviesProvider/>},
      {path:'Tabss',element:<Tabss/>},
      {path:'Discover',element:<Discover/>},
      {path:'MovieDiscover',element:<MovieDiscover/>},
      {path:'People',element:<People/>},
      {path:'TopRated',element:<TopRated/>},
      {path:'AirTriding',element:<AirTriding/>},
      {path:'Videos',element:<Videos/>},
      {path:'Footer',element:<Footer/>}
    ]}
  ])

function App() {
    return (
      <RouterProvider router={routers}/>
    );
}
export default App;
