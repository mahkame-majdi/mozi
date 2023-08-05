import { Fragment, useEffect, useState } from "react";
import './style.css'
import axios from "axios";
import Header from '../../header';
import Footer from '../../footer';
import WatchMovie from '../../watchMovie';
import { Link } from "react-router-dom";
import FeaturedNews, { news } from '../../featuredNews';

export default function Genres() {
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
                       <button className='main-button-gradient-font'>
                           <Link to={`/genres/${id}`}><h3>{name}</h3></Link>
                       </button>
                  </li>
               )
           })
       }
    return(
       <Fragment>
            <Header/>
            <div className="genre">
                <div className="about-genre">
                    <div className="container-main-title">
                        <h1>genre list</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                </div>
            </div>
            <div className="all-geners">
                <div className="container">
                    <div className="gener-list vertical-padding">
                        <h1>genre list</h1>
                        <ul>
                            {renderFarm()}
                        </ul>
                    </div>
                </div>
            </div>
            <FeaturedNews data= {news} ></FeaturedNews>
            <WatchMovie/>
            <Footer/>
       </Fragment>
    )
}