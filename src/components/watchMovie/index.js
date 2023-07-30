import './style.css';
import React from 'react';
import { useState, useRef, useEffect } from "react";

export default function WatchMovie() {

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
      ref.current.querySelectorAll('.watch-movie').forEach((el) => {
        el.classList.add("animation-on-both");
      });
    }
  }, [isIntersecting]);
 
  return(
    <div className='watch'  ref={ref}>
      <div className='container'>
        <div className='watch-movie'>
          <div className='description'>
            <h1>watch movie <br/>everywher, anytime.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className='main-button'>discover more</button>
          </div>
          <div className='macbook'>
            <img src='/assets/images/macbook.png'/>
          </div>
        </div>
      </div>
    </div>
  )
}