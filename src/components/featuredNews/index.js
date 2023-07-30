import "./style.css";
import { useState, useRef, useEffect } from "react";

export const news = {
    title: "Featured News",
    list: [
        {
            imageSrc: '/assets/images/popcorn.jpg',
            link: "#",
            heading: "Spider-Man 2’s Sam Raimi Reacts To Alfred Molina’s Doctor Octopus Returning In No Way Home",
            describe: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
            date: "September 26, 2021",
            comments: "No Comments",
        },
        {
            imageSrc: '/assets/images/camera.jpg',
            link: "#",
            heading: "6 Ways To Enjoy Disneyland’s Halloween Time, Even If You Can’t Get Into The Oogie Boogie Bash",
            describe: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
            date: "September 26, 2021",
            comments: "No Comments",
        },
        {
            imageSrc: '/assets/images/teater.jpg',
            link: "#",
            heading: "Cruella Director On Sequel Hopes And Emma Thompson’s Possible Return",
            describe: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
            date: "September 26, 2021",
            comments: "No Comments",
        },
        {
            imageSrc: '/assets/images/cinema.jpg',
            link: "#",
            heading: "Here’s A Viral Video Of Ant-Man’s Paul Rudd Dancing To ‘September’ To Start Your Weekend Right",
            describe: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
            date: "September 26, 2021",
            comments: "No Comments",
        },
    ]
}
export default function FeaturedNews(props) {
    function renderFarm() {
        return props.data.list.map(function(news, i) {
            return(
                <li key={i}>
                    <a href= {news.link}>
                        <img src={news.imageSrc} alt={news.heading}/>
                        <h3>{news.heading}</h3>
                    </a>
                    <p className="comments">{news.date}.{news.comments}</p>
                    <p>{news.describe}</p>
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
      console.log(isIntersecting);
      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, [isIntersecting]);
  
    useEffect(() => {
      if (isIntersecting) {
        ref.current.querySelectorAll('.news-wraper').forEach((el) => {
          el.classList.add("animation-on-both");
        });
      } 
    }, [isIntersecting]);
    return (
        <div className="news vertical-padding" ref={ref}>
            <div className="container">
                <div className="news-wraper">
                    <div className="news-title">
                        <h1 className="title">{props.data.title}</h1>
                        <button className="small-button">more news</button>
                    </div>
                    <ul className="news-box">
                        {renderFarm()}
                    </ul>
                </div>
            </div>
        </div>
    )
}