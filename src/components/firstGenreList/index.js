import './style.css'
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function FirstGenreList(props){
    const [movies, setMovies] = useState([]);
    const [loading, setLouding] = useState(false);
    useEffect(() => {
        getApi();
    }, []);
    function getApi(page= 2) {
        setLouding(true);
        axios.get(`https://moviesapi.ir/api/v1/genres/${props.genre_id}/movies`)
        .then(function(response){
            setMovies(response.data.data);
            setLouding(false);
        });
    }
    function renderFarm () {
        return movies &&
        movies.slice(3,9).map((film) => (
                <div key={film.id} className="genre-style">
                    <div className='genre-image'>
                        <img className="zoom" src={film.poster} alt={film.title}/>
                    </div>
                    <div className="genre-data fade-up">
                        <i class="fa-regular fa-circle-play"></i>
                        <h3>{film.title}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <Link to= {`/movie/${film.id}`} target="_blank"><button className="play-button">play movie</button></Link>
                    </div>
                </div>
        ))}
    return(
          <div className='genre-list'>
            <div className='container'>
                <div className='genre-list-wraper'>{renderFarm()}</div>
            </div>
          </div>
    ) 
}
