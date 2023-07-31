import './style.css'
import { Fragment } from "react"; 
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function EXploreOurTilte(props){
    const [movies, setMovies] = useState({data: [], metadata:{
        current_page: "1",
        page_count: 25,
        per_page: 10,
        total_count: 250}});
    const [loading, setLouding] = useState(false);
    useEffect (() => {
     document.title ="movie list";
    }, [])
    useEffect(() => {
        getApi();
    }, [])
    function getApi(page=1) {
        setLouding(true);
        axios.get('https://moviesapi.ir/api/v1/genres/${id}/movies')
        .then(function(response){
            setMovies(response.data.data);
            setLouding(false);
        });
    }
    return(
        <Fragment>
          <li className="movie-box">
            <Link to= {`/movie/${props.id}`} target="_blank">
                <img src={props.image} alt={props.title}/>
            </Link>
           </li>
       </Fragment>
    ) 
}
