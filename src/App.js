import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, createHashRouter } from 'react-router-dom';
import Navbar from './componnents/Designs/Navbar/Navbar';
import Footer from './componnents/Designs/Footer/Footer';
import Layout from './componnents/Layout/Layout';
import Home from './componnents/Designs/Home/Home';
//import Routes from './componnents/config/Routes';
import { RouterProvider} from 'react-router-dom';
import PlayingVideo from './componnents/videos,details/PlayingVideo/PlayingVideo';
import People from './componnents/People/People';
import TopRated from './componnents/TopRated/TopRated';
import AirTriding from './componnents/AirTriding/AirTriding';
import MoviesProvider from './componnents/MovieProvider/MovieProvider';
import Tabss from './componnents/Tabs/Tabss';
import Discover from './componnents/Discover/Discover';
import MovieDiscover from './componnents/MovieDiscover/MovieDiscover';
import Content from './componnents/Designs/content/content';
import DetailsVideo from './componnents/videos,details/DetailsVideo/DetailsVideo'
import Videos from './componnents/Videos/Videos'

let routers=createHashRouter([
    {path:'/',element:<Layout/>,children:[
      {path:'Home',element:<Home/>},
      {path:'content',element:<Content/>},
      {path:'Navbar',element:<Navbar/>},
      {path:'PlayingVideo',element:<PlayingVideo/>},
      {path:'DetailsVideo',element:<DetailsVideo/>},
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
