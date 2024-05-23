import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AirTriding = () => {
    const [airTrinding, setairTrinding] = useState([]);
    async function gettrinRated( ){
    const {data}= await axios.get('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',{
        headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
})
setairTrinding(data.results);
//console.log(data.results)
}
    useEffect(() => {
        gettrinRated( );
      },[]);
  return (
    <div className="container ps-5">
        <div className="row ">
        {airTrinding.map( function (movie,idx) {
                return <div key={idx} className="col-sm-3 py-2 justify-content-end">
                    <div className="card ">
                        <div className="movies text-center">
                            <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.titile}/>
                            <h2 className='text-center fs-6 text-black mt-3' >{movie.original_name}</h2>
                            <p className='text-secondary text-center'>{movie.first_air_date}</p>
                        </div>
                    </div>
        </div>
        })}
        </div>
    </div>   )
}
export default AirTriding