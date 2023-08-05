import './style.css'
import '../../index.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Footer(){
 const [loading, setLoading] = useState(false);
 const [genres, setGenres] = useState([]);
    useEffect (function() {
        getApi()
    }, []);
    async function getApi() {
     try{
       setLoading(true);
       const response = await axios.get("https://moviesapi.ir/api/v1/genres")
       setGenres(response.data);
       setLoading(false);
     } catch (e) {
        setLoading(false);
     }
    }
    function renderFarm() {
        return genres.slice(0,10).map((genre) => {
            const {id, name} = genre;
            return(
                <li key={id}>
                  <Link to={`/genres/${id}`} target="_blank">
                    <p>{name}</p>
                 </Link>
               </li>
            )
        })
    }
    return (
    <div className='footer'>
        <div className='container'>
          <div className='footer-style '>
            <div className='social'>
             <img src='/assets/images/logo.png'/>  
             <div className='social-media'>
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
             </div>
            </div>
            <div className='column geners-column'>
              <h3>movies</h3>
              <ul>
                  {renderFarm()}
              </ul>
            </div>
            <div className='column column-style support-column'>
              <h3>support</h3>
              <a href="#"><p>help center</p></a>
              <a href="#"><p>FAQ</p></a>
              <a href="#"><p>contact us</p></a>
              <a href="#"><p>ticket support</p></a>
              <a href="#"><p>my account</p></a>
            </div>
            <div className='column column-style about-mozi-column'>
              <h3>about mozi</h3>
              <Link to='/about-us'><p>about us</p></Link>
              <a href="#"><p>careers</p></a>
              <a href="#"><p>news & articles</p></a>
              <a href="#"><p>legal notices</p></a>
            </div>
          </div>
          <div className='footer-bottom'>
            <ul>
              <li><a href="#">term of use</a></li>
              <li><a href="#">privecy policy</a></li>
              <li><a href="#">cookie policy</a></li>
            </ul>
            <p>Copyright © 2021 Mozi Streaming Media, All rights reserved. Present by MoxCreative.</p>
          </div>
      </div>
    </div>
    );
}