import axios from 'axios'
import React, { useEffect, useState } from 'react'
const PlayingVideo = () => {
        const [videoMovie, setvideoMovie] = useState([]);
        async function getVedio( ){
        const {data}= await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',{
            headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
    })
    setvideoMovie(data.results);
    }
        useEffect(() => {
            getVedio( );
          },[]);
          
  return (

                <div className="container">
                    <div className="row">
                    {videoMovie.map( function (movie,idx) {
                            return <div key={idx} className="col-sm-3 py-2">
                                <div className="card">
                                    <div className="movies">
                                                <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                                                <p className='text-secondary text-center mt-3'>{movie.release_date}</p>
                                                <h2 className='text-black fw-bold mt-3'>{movie.vote_count}</h2>
                                            </div>
                                    </div>
                                </div>
                    })}
                    </div>
                </div>
     )
}

export default PlayingVideo