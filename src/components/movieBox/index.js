import "./style.css";
import { Link } from "react-router-dom";

export default function MovieBox(props) {
    return(
        <li className="movie-box">
            <div className="movie-box-style">
                <img className="zoom" src={props.image} alt={props.title}/>
                <div className="movie-box-hover fade-up">
                    <i class="fa-regular fa-circle-play"></i>
                    <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    <Link to= {`/movie/${props.id}`} target="_blank"><button className="play-button">play movie</button></Link>
                </div>
            </div>
        </li>
    );
}