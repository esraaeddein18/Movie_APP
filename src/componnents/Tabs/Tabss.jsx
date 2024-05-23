import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import styles from './Tabss.module.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const ReadMore = ({ children }) => {
    const btn = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="btn btn-light">{isReadMore ? btn : btn}<button onClick={toggleReadMore}>{isReadMore ? "...Read More" : " Show Less"} </button> </div>
    );
};
const Tabss = () => {
  const [trMovie, setMovie] = useState([]);
  async function getTrending( ){
    const {data}= await axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',{
        headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
})
setMovie(data.results);
//console.log(data.results)
}
    useEffect(() => {
        getTrending( );
      },[]);

      const settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    
     <div style={{backgroundColor: "#FFF2E1"}} className="background py-2" >
       <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-5 mt-4 bg-danger w-50 mx-auto rounded-5"
      justify> 
        <Tab eventKey="today" title="Today" className='text-white'>
<div className="container">
         <div className="row">        
                        {trMovie.map( function (movie,idx) {
                            return <div key={idx} className="col-sm-2 py-1">
                                <div className="card rounded-4 w-100">
                                        <div className="movies text-center">
                                        < img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className='w-100 rounded-4' />
                                            <p className='text-black mt-3 mb-1 fw-bolder text-capitalize'>{movie.original_name}</p>
                                            <h2 className='text-center text-secondary fst-normal fs-6 px-1'>{movie.original_name}</h2>
                                        </div>
                                    </div>
                                </div>
                    })}

                    </div>                    
                </div> 

        </Tab>

       




      <Tab eventKey="this week" title="This Week">
      <div className="container ">
                    <div className="row ">
                    {trMovie.map( function (movie,idx) {
                            return <div key={idx} className="col-sm-2 py-1">
                                <div className="card rounded-4 w-100">
                                    <div className="movies text-center">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-100 w-100 rounded-4' />
                                                <p className='text-black mt-3 mb-1 fw-bolder text-capitalize'>{movie.media_type}</p>
                                                <h2 className='text-center text-secondary fst-normal fs-6 px-1'>{movie.original_title}</h2>
                                            </div>
                                    </div>
                                </div>
                    })}
                    </div>
                </div>      </Tab>
      <Tab eventKey="common" title="Common">
      <div className="container ">
                    <div className="row ">
                    {trMovie.map( function (movie,idx) {
                            return <div key={idx} className="col-sm-2 py-1">
                                <div className="card rounded-4 w-100">
                                    <div className="movies text-center">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-100 w-100 rounded-4' />
                                                <p className='text-black mt-3 mb-1 fw-bolder text-capitalize'>{movie.media_type}</p>
                                                <h2 className='text-center text-secondary fst-normal fs-6 px-1'>{movie.original_title}</h2>
                                            </div>
                                    </div>
                                </div>
                    })}
                    </div>
                </div>      </Tab>

    </Tabs>
    </div>
 )
}

export default Tabss
