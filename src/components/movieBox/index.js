import "./style.css";
import { Link } from "react-router-dom";

export default function MovieBox(props) {
    return(
        <li className="movie-box">
            <Link to= {`/movie/${props.id}`} target="_blank">
                <img src={props.image} alt={props.title}/>
            </Link>
        </li>
    );
}