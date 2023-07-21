import axios from "axios";
import Header from '../../header';
import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../footer";
import "./style.css"
import WatchMovie from "../../watchMovie";
import NewMovies from "../../newMovies";

export default function SingleMovie() {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate;

    useEffect(() => {
        axios.get(`https://moviesapi.ir/api/v1/movies/${id}`)
        .then(function(response){
            setMovie(response.data);
        })
        .catch(function (error) {
         navigate("/");
        });
    }, [])
    return (
        <Fragment>
            <div className="movie" style={{backgroundImage:`url(${movie.poster})`}}>
             <Header/>
                <div className="container">
                 <div className="movie-player">
                        <div className="movie-data">
                            <div className="data-box">
                                <p>{movie.director}</p>
                                <p>{movie.year}</p>
                                <p>{movie.rated}</p>
                                <p>{movie.country}</p>
                            </div>
                            <h1>{movie.title}</h1>
                            <p>{movie.imdb_rating} IMDB</p>
                            <p>{movie.plot}</p>
                            <button className="main-button">play video</button>
                        </div>
                        <div className="icon">
                            <div className="player"></div>
                            <p>play trailers</p>
                        </div>
                  </div>
                </div> 
            </div>
            <NewMovies/>
            <WatchMovie/>
            <Footer/>  
        </Fragment>
    );
}
