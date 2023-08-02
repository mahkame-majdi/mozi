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
        axios.get('https://moviesapi.ir/api/v1/genres/${genre_id}/movies')
        .then(function(response){
            setMovies(response.data.data);
            setLouding(false);
        });
    }
    return(
        <Fragment>
          <li className="movie-box">
            <Link to= {`/genres/${props.genre_id}`} target="_blank">
                <img src={props.image} alt={props.title}/>
            </Link>
           </li>
       </Fragment>
    ) 
}
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
    

    