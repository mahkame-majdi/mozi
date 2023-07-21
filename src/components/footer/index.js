import './style.css'
import '../../index.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../logo';


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
        return genres.map((genre) => {
            const {id, name} = genre;
            return(
                <li key={id}>
                  <Link to={`/genres/${id}`}>
                    <h5>{name}</h5>
                 </Link>
               </li>
            )
        })
    }
    return (
    <div className='footer'>
        <div className='container'>
          <div className='footer-style'>
            <Logo/>
            <div className='column'>
              <h3>movies</h3>
              <ul>
                  {renderFarm()}
              </ul>
            </div>
            <div className='column column-style'>
              <h3>support</h3>
              <a href="#">help center</a>
              <a href="#">FAQ</a>
              <a href="#">contact us</a>
              <a href="#">ticket support</a>
              <a href="#">my account</a>
            </div>
            <div className='column column-style'>
              <h3>about mozi</h3>
              <Link to='/about-us'>about us</Link>
              <a href="#">careers</a>
              <a href="#">news & articles</a>
              <a href="#">legal notices</a>
            </div>
          </div>
          <div className='footer-bottom'>
            <ul>
              <li><a href="#">term of use</a></li>
              <li><a href="#">privecy policy</a></li>
              <li><a href="#">cookie policy</a></li>
            </ul>
           <p>Copyright © 2023 All rights reserved</p>
          </div>
      </div>
    </div>
    );
}