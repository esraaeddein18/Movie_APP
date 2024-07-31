import axios from 'axios';
import React,{useEffect ,useState} from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const DetailsVideo = () => {

  const [detailReview, setdetailReview] = useState([]);
        async function getDetail( ){
        const {data}= await axios.get('https://api.themoviedb.org/3/review/:review_id',{
            headers: {accept: 'application/json', Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA2MWI3YTRlMjI2NGQ0NGQ5N2VmNmZjZTM4N2Q2YyIsInN1YiI6IjY1ZDk4NWYzZmNiOGNjMDE4NmNhZjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ucW4_LfMgcp6kdRWZXLlac47B9MZmmScyV19r4EpI'}
    })
    setdetailReview(data.results);
    }
    useEffect(() => {
      getDetail( );
    },[]);
    
  return (
    <div className="container ps-5">
      <div className="row ">
        {detailReview.map( function (movie,idx) {
                return <div key={idx} className="col-sm-3 py-2 justify-content-end">
                        <div className="card w-100">
                          <div className="movies text-center">
                                <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movie.avatar_path}`} alt={movie.titile}/>
                                <h2 className='text-center fs-5 text-black mt-3'>{movie.author_details}</h2>
                                <p className='text-secondary text-center'>{movie.rating}</p>
                                <p className='text-secondary text-center'>{movie.username}</p>
                                <p className='text-secondary text-center'>{movie.rating}</p>
                          </div>
                        </div>
                    </div>
        })}
      </div>
    </div>   
    )
}

export default DetailsVideo