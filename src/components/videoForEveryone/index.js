import './style.css';
import { useState, useRef, useEffect } from "react";

export const video = {
    title: "Video for Everyone",
    list: [
        {
            imageSrc: '/assets/images/family.JPG',
            link: `/genres/${13}` ,
            heading: "Family Movies",
            describe: "Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna",
        },
        {
            imageSrc: '/assets/images/friends.JPG',
            link: `/genres/${16}`,
            heading: "Teen Movies",
            describe: "Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna",
        },
        {
            imageSrc: '/assets/images/kids.JPG',
            link: `/genres/${15}`,
            heading: "Kids Movies",
            describe: "Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna",
        },
        {
            imageSrc: '/assets/images/football.JPG',
            link: `/genres/${21}`,
            heading: "Sports Video",
            describe: "Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna",
        },
    ]
}
export default function VideoBox(props) {

    function renderFarm() {
        return props.data.list.map(function(video, i) {
            return(
                <li key={i}>
                    <div className='single-video'>
                        <a href= {video.link}>
                            <img src={video.imageSrc} alt={video.heading}/>
                        </a>
                        <div className='single-video-description'>
                            <a href= {video.link}>
                             <h3>{video.heading}</h3>
                            </a>
                            <p>{video.describe}</p>
                        </div>
                    </div>
                </li>
            )
        });
    }
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" }
      );
      observer.observe(ref.current);
  
      return () => observer.disconnect();
       }, [isIntersecting]
      );
  
    useEffect(() => {
      if (isIntersecting) {
        ref.current.querySelectorAll('.video-for-everyone-wraper').forEach((el) => {
          el.classList.add("animation-on-both");
        });
      }
    }, [isIntersecting]);

    return (
        <div className="video-for-everyone vertical-padding"  ref={ref}>
            <div className="container">
                <div className="video-for-everyone-wraper">
                    <h1 className="title">{props.data.title}</h1>
                    <ul className="video-box">
                        {renderFarm()}
                    </ul>
                </div>
            </div>
        </div>
    )
}