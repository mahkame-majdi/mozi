import './style.css';
import { useState, useRef, useEffect } from "react";

export const trial = {
    title: "Start your free Trial",
    subtitle: "Choose from annual or monthly plans.",
    secondSubtitle: "Switch or cancel anytime.",
    list: [
        {
            package: "HD+ Package",
            premium: "Premium package streaming",
            payment: "$",
            price: "4",
            cent: "99",
            monthly: "monthly",
            features: [
                "No ads",
                "Access to full library with thousands of movies",
                "HD+ Quality Streaming",
                "Watch on any device",
                "Stream on 1 device at a time",
                "Offline Viewing",
            ],
        },
        {
            package: "Full HD Package",
            premium: "Premium package streaming",
            payment: "$",
            price: "12",
            cent: "99",
            monthly: "monthly",
            features: [
                "No ads",
                "Access to full library with thousands of movies",
                "FullHD Quality Streaming",
                "Watch on any device",
                "Stream on 4 devices at a time",
                "Offline Viewing",
            ],
        },
        {
            package: "4K Package",
            premium: "Premium package streaming",
            payment: "$",
            price: "24",
            cent: "99",
            monthly: "monthly",
            features: [
                "No ads",
                "Access to full library with thousands of movies",
                "4K Quality Streaming",
                "Watch on any device",
                "Stream on 8 devices at a time",
                "Offline Viewing",
            ],
        },
    ]
};
export default function Trial(props) {
    function renderFarm() {
        return trial.list.map((item, i) => (
            <li key={i} className="trial-animation">
                <div className='trial-box'>
                    <div className="trial-box-title">
                        <h3>{item.package}</h3>
                        <p>{item.premium}</p>
                    </div>
                    <div className="price">
                        <div className='price-design'>
                            <h2>{item.payment}</h2>
                            <h1>{item.price}</h1>
                            <h2>{item.cent}</h2>
                        </div>
                        <p>{item.monthly}</p>
                    </div>
                    <ul className='features'>
                        {item.features.map((feature, index) => (
                            <li key={index}>
                                <i className="fa-solid fa-check"></i>
                                <p>{feature}</p> 
                            </li>
                        ))}
                    </ul>
                    <div className='action'>
                        <button className='large-button'>Start your free Trial</button>
                        <p>*No credit card required</p>
                    </div>
                </div>
            </li>
        ));
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
        ref.current.querySelectorAll('.trial-wraper').forEach((el) => {
          el.classList.add("animation-on-all");
        });
      }
    }, [isIntersecting]);
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
          ref.current.querySelectorAll('.main-trial-box').forEach((el) => {
            el.classList.add("animation-on");
          });
        }
      }, [isIntersecting]);
    return (
        <div className="trial vertical-padding" ref={ref}>
            <div className="container">
                <div className="trial-wraper">
                    <div className="trial-title">
                        <h1>{trial.title}</h1>
                        <p>{trial.subtitle}</p>
                        <p>{trial.secondSubtitle}</p>
                    </div>
                    <div className='main-trial-box-wraper' ref={ref}>
                        <ul className='main-trial-box'>
                            {renderFarm()}
                        </ul>
                    </div>
                    <div className='trial-contact'>
                        <p>*Video content availability may vary by country.</p>
                        <h1>Need help?</h1>
                        <button className="main-button">contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}