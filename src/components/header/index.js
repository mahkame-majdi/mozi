import './style.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    useEffect(() => {
        window.addEventListener("scroll", myFunction)
        function myFunction() {
            if (document.body.scrollTop > 40|| document.documentElement.scrollTop > 40) {
                document.getElementById("header").classList.add(`active`);
            } else {
                document.getElementById("header").classList.remove(`active`);
            }
        }
    });
    return (
      <div className="header" id='header'>
            <div className='container'>
                <div className='header-style'>
                    <div className="menu-bar">
                            <div className="menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        <Link to= {'/'}><img src='/assets/images/logo.png'/> </Link>    
                    </div>
                    <div className="actions">
                        <button className="main-button-gradient-font">sign in</button>
                        <button className="main-button">go permium</button>
                    </div>
                </div>
            </div>
      </div>
    );
}