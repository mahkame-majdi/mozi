import './style.css';
import { useEffect, useState } from "react";
import MovieList from "../movieList";
import axios from 'axios';
import { Pagination } from 'antd';

export default function NewMovies(props){
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
        axios.get('https://moviesapi.ir/api/v1/movies', {params:{page:page}}).then(function(response){
            setMovies(response.data);
            setLouding(false);
        });
    }
    function changePage(page){
     getApi(page) 
       }
    return (
        <div className='new-movies'>
            <div className='container'>
                <div className='vertical-padding'>
                    <div className='heading'>
                        <h1>movie list</h1>
                        <button className='small-button'>View More</button>
                    </div>
                    <ul>
                        <li className="movie-list">
                            <MovieList data={movies.data}/>
                        </li>
                    </ul>
                    {/* <Button type="primary">salam</Button> */}
                    <Pagination onChange={changePage} defaultCurrent={movies.metadata.current_page} total={movies.metadata.total_count}/>
                </div>
            </div>
        </div>
    );
}