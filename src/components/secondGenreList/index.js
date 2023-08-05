import './style.css'
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function SecondGenreList(props){
    const [movies, setMovies] = useState([]);
    const [loading, setLouding] = useState(false);
    useEffect(() => {
        getApi();
    }, []);
    function getApi(page= 3) {
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
                        <img className="zoom" src={film.poster} alt={props.title}/>
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
// import './style.css'
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Fragment } from "react"; 


// export default function EXploreOurTilte(){
//  const [loading, setLoading] = useState(false);
//  const [genres, setGenres] = useState([]);
//     useEffect (function() {
//         getApi()
//     }, []);
//     async function getApi() {
//      try{
//        setLoading(true);
//        const response = await axios.get("https://moviesapi.ir/api/v1/genres")
//        setGenres(response.data);
//        setLoading(false);
//      } catch (e) {
//         setLoading(false);
//      }
//     }
//     function renderFarm() {
//         return genres.slice(2,5).map((genre) => {
//             const {id, name} = genre;
//             return(
//                 <li key={id}>
//                     <button className='extra-large-button'>
//                        <h3>{name}</h3>
//                     </button>
//                </li>
//             )
//         })
//     }
//     return (
//       <div className="explore vertical-padding">
//         <div className='container'>
//             <div className="explore-wraper">
//                 <h1>Explore our most popular titles</h1>
//                 <ul className='buttons'>
//                     {renderFarm()}
//                 </ul>
//             </div>
//         </div>
//       </div>
//     );
// }
// import './style.css'
// import { Fragment } from "react"; 
// import axios from 'axios';
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// function EXploreTilte(props){
//     const [movies, setMovies] = useState([]);
//     const [loading, setLouding] = useState(false);
//     useEffect (() => {
//      document.title ="movie list";
//     }, [])
//     useEffect(() => {
//         getApi();
//     }, [])
//     function getApi(page=1) {
//         setLouding(true);
//         axios.get('https://moviesapi.ir/api/v1/genres/${genreid}/movies')
//         .then(function(response){
//             setMovies(response.data.data);
//             setLouding(false);
//         });
//     }
//     return(
//         <Fragment>
//           <li className="explore-title vertical-padding">
//             <h1>Explore our most popular titles</h1>
//             {/* <Link to= {`/movies/${id}`} target="_blank"> */}
//                 <img src={props.image} alt={props.title}/>
//             {/* </Link> */}
//            </li>
//        </Fragment>
//     ) 
// }
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";


// export default function EXploreOurTilte(){
//     const {genreid,name} = useParams();
//     const [genre,setGenre] = useState([]);
//     useEffect(()=>{
//         getApi()
//     },[genreid]);
//        function getApi() {
//         axios.get(`https://moviesapi.ir/api/v1/genres/${genreid}/movies`)
//         .then(function (response) {
//           setGenre(response.data.data);
//         }
//           )}
//         function genreFarm(){
//             return genre.data.map(function(eachGenre){
//                 const {id ,poster,title} = eachGenre;
//                 return (
//                     <li key={id}>
//                         <Link to= {`/Movies/${id}`}><img src={poster}/>
//                             <h4>{title}</h4>
//                         </Link>
//                     </li>
//                 )})
//             }
                
//     return(

//             <div className="Container">
//             <h1 >{name}</h1>
//                 <ul >
//                     {genreFarm()}
//                 </ul>
//             </div>
        
//     )
          
          
        
//       }
    

    