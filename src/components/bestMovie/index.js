import React from 'react';
import './style.css';
import { useState, useRef, useEffect } from "react";

export default function BestMovie() {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll('.best-movie-text-wrapper').forEach((el) => {
        el.classList.add("animation");
      });
    }
  }, [isIntersecting]);

    return(
            <div className="best-movie" ref={ref}>
                <div className="container">
                    <div className="best-movie-text-wrapper">
                        <h1>The best movie and video on your home.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className='main-button'>go permium</button>
                    </div>
                </div>
            </div>
    )
}