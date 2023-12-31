import './style.css';
import Header from '../../header';
import Footer from '../../footer';
import WatchMovie from '../../watchMovie';
import EXploreOurTilte from '../../exploreOurTitles';
import { Fragment } from 'react';
import BestMovie from '../../bestMovie';
import VideoBox, { video } from '../../videoForEveryone';
import FrequentlyAskQuestions, { faq } from '../../faq';
import Trial from '../../trial';

export default function Home() {
    return(
        <Fragment>
            <Header/>
            <div className="full-header">
                <div className='home-page'>
                    <div className= "container-main-title">
                        <h1>Watch movie anytime, everywhere.</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>
                        <div className="header-actions">
                            <button className='main-button-gradient-font'>learn more</button>
                            <button className='main-button' >go permium</button>
                        </div>
                    </div>
                </div>
            </div>
            <EXploreOurTilte></EXploreOurTilte>
            <VideoBox data= {video} ></VideoBox>
            <BestMovie/>
            <Trial/>
            <WatchMovie/>
            <FrequentlyAskQuestions data= {faq}></FrequentlyAskQuestions>
            <Footer/>
        </Fragment>
    )
}