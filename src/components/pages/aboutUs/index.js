import Header from '../../header';
import Footer from '../../footer';
import WatchMovie from '../../watchMovie';
import './style.css';
import { Fragment } from 'react';
import BestMovie from '../../bestMovie';
import VideoBox, { video } from '../../videoForEveryone';
import FeaturedNews, { news } from '../../featuredNews';
import TheStory, { story } from '../../theStory';

export default function AboutUs() {
    return(
        <Fragment>
            <Header/>
            <div className="top-header">
                <div className="about-us">
                    <div className="container-main-title">
                        <h1>about us</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                </div>
            </div>
            <TheStory data= {story} ></TheStory>
            <BestMovie/>
            <VideoBox data= {video} ></VideoBox>
            <WatchMovie/>
            <FeaturedNews data= {news} ></FeaturedNews>
            <Footer/>
        </Fragment>
    )
}