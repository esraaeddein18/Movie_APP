import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Videos = () => {
    const [videoId, setvideoId] = useState([]);
    async function getVedio( ){
    const {data}= await axios.get('https://api.themoviedb.org/3/movie/33/videos?language=en-US&api_key=8e061b7a4e2264d44d97ef6fce387d6c',{
        headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
    })
    setvideoId(data.results);
    }
        useEffect(() => {
            getVedio();
      },[]);
  return (
        <div className="container">
            <div className="row">
                {videoId.map( function (movie,idx){
                    return <div key={idx} className="col-sm-3 py-2">
                        <div className="card">
                            <div className="movies text-center">
                                <p className='text-black fw-bold mt-3'>{movie.id}</p>
                                <h2 className='text-center fs-5 text-danger'>{movie.name}</h2>
                                <h2 className='text-center fs-5 text-danger'>{movie.site}</h2>
                                <h2 className='text-center fs-5 text-danger'>{movie.published_at}</h2>

                                
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
  )
}

export default Videos