import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import Tab from 'react-bootstrap/Tab';
//import Tabs from 'react-bootstrap/Tabs';
const MoviesProvider = () => {
    const [trMovie, setMovie] = useState([]);
    async function getproviders( ){
    const {data}= await axios.get('https://api.themoviedb.org/3/watch/providers/movie?language=en-US',{
        headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
})
setMovie(data.results);

}
    useEffect(() => {
        getproviders( );
      },[]);
  return (
    <>
        <div className="container">
                    <div className="row">
                    {trMovie.map( function (movie,idx) {
                            return <div key={idx} className="col-sm-3 py-2">
                                <div className="card">
                                    <div className="movies text-center">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.logo_path}`} className='w-100' />
                                                <p className='text-black fw-bold mt-3'>{movie.provider_name}</p>
                                                <h2 className='text-center fs-5 text-danger'>{movie.original_title}</h2>
                                            </div>
                                    </div>
                                </div>
                    })}
                    </div>
        </div>

    </>
  )
}
export default MoviesProvider


