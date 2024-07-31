import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TopRated = () => {
    const [topRated, settopRated] = useState([]);
        async function getRated( ){
        const {data}= await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',{
            headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
    })
    settopRated(data.results);
    }
        useEffect(() => {
            getRated( );
          },[]);
  return (
        <div className="container ps-5">
            <div className="row ">
            {topRated.map( function (movie,idx) {
                    return <div key={idx} className="col-sm-3 py-2 justify-content-end">
                        <div className="card w-100">
                            <div className="movies text-center">
                                        <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.titile}/>
                                        <h2 className='text-center fs-5 text-black mt-3' >{movie.title}</h2>
                                        <p className='text-secondary text-center'>{movie.release_date}</p>
                                    </div>
                            </div>
                        </div>
            })}
            </div>
        </div>  
    )
}

export default TopRated