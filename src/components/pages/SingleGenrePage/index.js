import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../header";
import Footer from "../../footer";
import Trial from "../../trial";
import './style.css';


export default function SingleGenrePage(){
  const {genreid, name} = useParams();
  const [genre, setGenre] = useState([]);
  useEffect(()=>{
    getApi()
  },[genreid]);
  function getApi() {
    axios.get(`https://moviesapi.ir/api/v1/genres/${genreid}/movies`)
    .then(function (response) {
      setGenre(response.data.data);
    }
  )}
  function genreFarm(){
    return genre.map(function(eachGenre){
      const {id ,poster,title} = eachGenre;
      return (
        <li key={id}>
          <Link to= {`/Movie/${id}`}>
            <img src={poster}/>
          </Link>
          <div className="genre-data fade-up">
            <i class="fa-regular fa-circle-play"></i>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <Link to= {`/Movie/${id}`} target="_blank"><button className="play-button">play movie</button></Link>
          </div>
        </li>
      )
    })
  }    
   return(
    <Fragment>
      <Header></Header>
      <div className="single-genre-header">
                <div className="single-genre-title">
                    <div className="container-main-title">
                        <h1>single genre</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                </div>
            </div>
      <div className="single-genre vertical-padding">
        <div className="container">
          <div className="single-genre-wraper">
            <h1>{name}</h1>
            <ul>
              {genreFarm()}
            </ul>
          </div>
        </div>
      </div>
      <Trial/>
      <Footer/>
    </Fragment>
    )
}
    

    
// import './style.css'
// import axios from 'axios';
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// export default function SingleGenrePage(props){
//     const [movies, setMovies] = useState([]);
//     const [loading, setLouding] = useState(false);
//     useEffect(() => {
//         getApi();
//     }, []);
//     function getApi(page=1) {
//         setLouding(true);
//         axios.get(`https://moviesapi.ir/api/v1/genres/${props.genre_id}/movies`)
//         .then(function(response){
//             setMovies(response.data.data);
//             setLouding(false);
//         });
//     }
//     function renderFarm () {
//         return movies &&
//         movies.map((film) => (
//                 <div key={film.id} className="genre-style">
//                     <div className='genre-image'>
//                         <img className="zoom" src={film.poster} alt={props.title}/>
//                     </div>
//                     <div className="genre-data fade-up">
//                         <i class="fa-regular fa-circle-play"></i>
//                         <h3>{film.title}</h3>
//                         <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
//                         <Link to= {`/genres/${props.genre_id}/movies`} target="_blank"><button className="play-button">play movie</button></Link>
//                     </div>
//                 </div>
//         ))}
//     return(
//           <div className='genre-list'>
//             <div className='container'>
//                 <div className='genre-list-wraper'>{renderFarm()}</div>
//             </div>
//           </div>
//     ) 
// }
// import './style.css';
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import Link from 'antd/es/typography/Link';

// export default function SingleGenrePage(props) {
//     const [movies, setMovies] = useState({data: [], metadata:{
//         current_page: "1",
//         page_count: 25,
//         per_page: 10,
//         total_count: 250}});
//     const [loading, setLouding] = useState(false);
//     useEffect (() => {
//      document.title ="movie list";
//     }, [])
//     useEffect(() => {
//         getApi();
//     }, [])
//     function getApi(page=1) {
//         setLouding(true);
//         axios.get('https://moviesapi.ir/api/v1/movies', {params:{page:page}}).then(function(response){
//             setMovies(response.data);
//             setLouding(false);
//         });
//     }
//     function changePage(page){
//      getApi(page) 
//     }
//     function renderFarm() {
//         return props.data.map((movie) => {
//             return (
//                 <li className="movie-box">
//                 <div className="movie-box-style">
//                     <div className="image-style">
//                        <img className="zoom" src={props.image} alt={props.title}/>
//                     </div>
//                     <div className="movie-box-hover fade-up">
//                         <i class="fa-regular fa-circle-play"></i>
//                         <h3>{props.title}</h3>
//                         <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
//                         <Link to= {`/movie/${props.id}`} target="_blank"><button className="play-button">play movie</button></Link>
//                     </div>
//                 </div>
//             </li>
//             );
//         });
//     }
//     return (
//         <div className='new-movies'>
//             <div className='container'>
//                 <div className='vertical-padding'>
//                     <div className='heading'>
//                         <h1>movie list</h1>
//                         <button className='small-button'>View More</button>
//                     </div>
//                     <ul>
//                         <li className="movie-list">
//                           <ul>{renderFarm()}</ul> 
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// // }
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SingleGenrePage = ({ genreId }) => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${genreId}/movies`);
//         setMovies(response.data.data);
//       } catch (error) {
//         setError('Error fetching movies.');
//       }
//     };

//     fetchMovies();
//   }, [genreId]);

//   return (
//     <div>
//       {error && <p>{error}</p>}
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <h3>{movie.title}</h3>
//           <p>Release Date: {movie.release_date}</p>
//           <p>Rating: {movie.rating}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SingleGenrePage;



