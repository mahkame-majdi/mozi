import MovieBox from "../movieBox";
import { Fragment } from "react";

export default function MovieList(props) {
    function renderFarm() {
        return props.data.map((movie) => {
            return (
            <MovieBox key={movie.id} id={movie.id} title={movie.title} image={movie.poster}/>
            );
        });
    }
    return(
         <Fragment>
               <ul>{renderFarm()}</ul> 
         </Fragment>
    )
}