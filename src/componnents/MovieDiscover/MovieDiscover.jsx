import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MovieDiscover = () => {

    const [tvDiscover, settvDiscover] = useState([]);

  async function getTrending( ){
    const {data}= await axios.get('',{
        headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
})
settvDiscover(data.results);
}
    useEffect(() => {
        getTrending( );
      },[]);

  return (
    <div className="container">
        <div className="row">
        {tvDiscover.map( function (movie,idx) {
                return <div key={idx} className="col-sm-3 py-2">
                <div className="card">
                    <div className="movies">
                                <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                                <p className='text-warning mt-3 mb-1 fw-bold text-capitalize px-3'>{movie.vote_average}</p>
                                <h2 className='text-center text-secondary fst-normal fs-6 px-1'>{movie.name}</h2>
                    </div>
                </div>
        </div>
    })}
    </div>
</div>  )
}

export default MovieDiscover