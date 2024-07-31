import axios from 'axios'
import React, { useEffect, useState } from 'react'
const People = () => {
    const [peoplePopular, setpeoplePopular] = useState([ ]);
    async function getPeople( ){
        const {data}= await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=8e061b7a4e2264d44d97ef6fce387d6c',{
            headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
        })
    setpeoplePopular(data.results);
    }
    useEffect(() => {
        getPeople( );
      },[]);

  return (
    <div className="container">
        <div className="row">
            {peoplePopular.map( function (pic,idx) {
                    return <div key={idx} className="col-sm-4 py-2">
                                <div className="card w-75">
                                    <div className="movies text-center">
                                        <img src={`https://image.tmdb.org/t/p/w500/${pic.poster_path}`} className='w-100 rounded-4' />
                                        <p>{pic.name}</p>
                                        <p><span className='text-warning'>{pic.vote_average}</span></p>
                                        <p>{pic.first_air_date}</p>
                                        <p>{pic.original_name}</p>
                                        <p>{pic.overview}</p>
                                    </div>
                                </div>
                            </div>
            })}
        </div>
    </div>      
    )
}
export default People