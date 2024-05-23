import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
//import styles from './Home.module.css'
//import img1 from '../../../assets/img6.webp'
//import img3 from '../../../assets/img3.jpg'
//import img4 from '../../../assets/img4.jpg'
//import img7 from '../../../assets/img7.webp'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../Home/Tabss.module.css'
import axios from 'axios'
export default function Home() {
    const [trMovie, setMovie] = useState([]);
    //const [trMoviemore, settrMoviemore] = useState([]);//const [trMoviend, settrMoviend] = useState([]);
    async function getTrending( ){
    const {data}= await axios.get('https://api.themoviedb.org/3/trending/all/day?language=en-US',{
        headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
})
setMovie(data.results);
//settrMoviemore(data.results);//settrMoviend(data.results);
//console.log(data.results)
}
    useEffect(() => {
        getTrending( );
      },[]);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
  return (
<>
        
        <form className="d-flex ms-5 py-5">
                <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="background py-2" >
            <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-5 mt-4 bg-danger w-50 mx-auto rounded-5" justify> 
                <Tab eventKey="today" title="today" className='text-white'>
                    <div className="container">
                        <Slider {...settings}>
                            <div className="container-fluid">
                                    <div className="r d-flex w-75 ">
                                            {trMovie.map( function (movie,idx) {
                                                return <div key={idx} className="col-sm-3 px-2 py-2">
                                                    <div className="card rounded-4 w-100">
                                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-100 rounded-4' />
                                                        <p className='text-black mt-3 mb-1 fw-bolder text-capitalize text-center'>{movie.media_type}</p>
                                                        <h2 className='text-center text-secondary fst-normal fs-6 px-1 text-center'>{movie.original_title}</h2>
                                                    </div>
                                                </div>       
                                            })}
                                        </div>
                                    </div>
                                <div>
                            </div>
                        </Slider>
                    </div>     
                </Tab>
                <Tab eventKey="this week" title="this week">
                    <div className="container ">
                        <Slider {...settings}>
                            <div className="container">
                                    <div className="r d-flex w-75 ">
                                            {trMovie.map( function (movie,idx) {
                                                return <div key={idx} className="col-sm-4 px-2 py-2">
                                                    <div className="card rounded-4 w-100">
                                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-100 rounded-4' />
                                                        <p className='text-black mt-3 mb-1 fw-bolder text-capitalize text-center'>{movie.media_type}</p>
                                                        <h2 className='text-center text-secondary fst-normal fs-6 px-1 text-center'>{movie.original_title}</h2>
                                                    </div>
                                                </div>       
                                            })}
                                        </div>
                                    </div>
                                <div>
                            </div>
                        </Slider>
                    </div>      
                </Tab>
                <Tab eventKey="common" title="common">
                    <div className="container ">
                        <Slider {...settings}>
                            <div className="container">
                                    <div className="r d-flex w-75 ">
                                            {trMovie.map( function (movie,idx) {
                                                return <div key={idx} className="col-sm-4 px-2 py-2">
                                                    <div className="card rounded-4 w-100">
                                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-100 rounded-4' />
                                                        <p className='text-black mt-3 mb-1 fw-bolder text-capitalize text-center'>{movie.media_type}</p>
                                                        <h2 className='text-center text-secondary fst-normal fs-6 px-1 text-center'>{movie.original_title}</h2>
                                                    </div>
                                                </div>       
                                            })}
                                        </div>
                                    </div>
                                <div>
                            </div>
                        </Slider>
                    </div>      
                </Tab>
            </Tabs> 
        </div>
</>
  );
}








