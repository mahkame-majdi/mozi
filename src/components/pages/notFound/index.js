import Header from '../../header';
import Footer from '../../footer';
import './style.css';
import { Fragment } from 'react';

export default function NotFound() {
    return(
        <Fragment>
            <div className="hero">
             <Header/>
                <div className="text">
                    <div className="container-main-title">
                        <h1>404</h1>
                        <h3>Page not found</h3>
                        <p>The page you are looking for does not exist; it may have been moved, or removed altogether.</p>
                        <button className='main-button'>Back Home</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}