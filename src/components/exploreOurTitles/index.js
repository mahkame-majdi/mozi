import './style.css'
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import FirstGenreList from '../firstGenreList';
import SecondGenreList from '../secondGenreList';
import ThirdGenreList from '../thirdGenreList';
import { Link } from "react-router-dom";


export default function EXploreOurTilte(props){
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
        return genres.slice(2,5).map((genre) => {
            const {id, name} = genre;
            return(
                <li key={id}>
                    <button className='extra-large-button'>
                       <h3>{name}</h3>
                    </button>
               </li>
            )
        })
    }
    const tabs = document.querySelectorAll('.extra-large-button');
    const all_content = document.querySelectorAll('.genre-content');

    tabs.forEach((tab, index)=> {
        tab.addEventListener('click', ()=>{
            tabs.forEach(tab => {tab.classList.remove('active')});
            tab.classList.add('active');

            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
        })
    })
    return (
        <Fragment>
            <div className="explore vertical-padding">
                <div className='container'>
                    <div className="explore-wraper">
                        <h1>Explore our most popular titles</h1>
                        <ul className='buttons'>
                            <li>
                                <button className='extra-large-button btn1'>
                                <h3>action</h3>
                                </button>
                            </li>
                            <li>
                                <button className='extra-large-button btn2 active'>
                                <h3>biography</h3>
                                </button>
                            </li>
                            <li>
                                <button className='extra-large-button btn3'>
                                <h3>history</h3>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='content-slider'>
                        <div className="genre-content">
                            <FirstGenreList genre_id={3}></FirstGenreList>
                        </div>
                        <div className="genre-content active">
                            <SecondGenreList genre_id={4}></SecondGenreList>
                        </div>
                        <div className="genre-content">
                            <ThirdGenreList genre_id={5}></ThirdGenreList>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


    