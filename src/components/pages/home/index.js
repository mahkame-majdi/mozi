import './style.css';
import Header from '../../header';
import Footer from '../../footer';
import WatchMovie from '../../watchMovie';
import { Fragment } from 'react';
import BestMovie from '../../bestMovie';
import VideoBox, { video } from '../../videoForEveryone';
import FrequentlyAskQuestions, { faq } from '../../faq';

export default function Home() {
    return(
        <Fragment>
            <div className="full-header">
                <Header/>
                <div className='home-page'>
                    <div className= "container-main-title">
                        <h1>Watch movie anytime, everywhere.</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>
                        <div className="actions">
                            <button className='main-button-gradient-font'>learn more</button>
                            <button className='main-button'>go permium</button>
                        </div>
                    </div>
                </div>
            </div>
            <VideoBox data= {video} ></VideoBox>
            <BestMovie/>
            <WatchMovie/>
            <FrequentlyAskQuestions data= {faq}></FrequentlyAskQuestions>
            <Footer/>
        </Fragment>
    )
}