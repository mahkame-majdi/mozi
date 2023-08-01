import './style.css';
import { useState, useRef, useEffect } from "react";

export const story = {
    title: "We bring dreams to come to life.",
    list: [
        {
            numbers: "8M",
            title: "User Subscribes",
        },
        {
            numbers: "135",
            title: "Countries",
        },
        {
            numbers: "14K",
            title: "Movie Collections",
        },
        {
            numbers: "950",
            title: "Employees around the world",
        },
    ]
}
export default function TheStory(props) {
    function renderFarm() {
        return props.data.list.map(function(story, i) {
            return(
                <li key={i}>
                    <h3 className='countup'>{story.numbers}<span>+</span></h3>
                    <h6>{story.title}</h6>
               </li>
            )
        });
    }
    // const animationDuration = 2000;
    // const frameDuration = 1000 / 60;
    // const totalFrames = Math.round( animationDuration / frameDuration );
    // const easeOutQuad = t => t * ( 2 - t );
    // const animateCountUp = el => {
    // let frame = 0;
    // const countTo = parseInt( el.innerHTML, 10 );
    // const counter = setInterval( () => {
    //     frame++;
    //     const progress = easeOutQuad( frame / totalFrames );
    //     const currentCount = Math.round( countTo * progress );

    //     if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
    //     el.innerHTML = currentCount;
    //     }
    //     if ( frame === totalFrames ) {
    //     clearInterval( counter );
    //     }
    // }, frameDuration );
    // };
    // const runAnimations = () => {
    // const countupEls = document.querySelectorAll( '.countup' );
    // countupEls.forEach( animateCountUp );
    // };
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
          ref.current.querySelectorAll('.story-box-wraper').forEach((el) => {
            el.classList.add("animation");
          });
        }
      }, [isIntersecting]);
    return (
        <div className="vertical-padding story-box" ref={ref}>
            <div className="container-main-title">
                <div className='story-box-wraper'>
                    <div className='story-box-animation'>
                        <h5>The Story</h5>
                        <h1 className="title">{props.data.title}</h1>
                        <p>Vitae pulvinar integer augue facilisis. Elementum inceptos sociosqu tortor pellentesque torquent nec magna. Tristique felis mollis viverra semper mus turpis vel. Posuere lacinia praesent taciti penatibus.</p>
                        <p>Leo risus dignissim pellentesque inceptos elementum. Tortor scelerisque libero letius tempus suscipit mollis aliquet. Auctor odio habitasse per volutpat nulla. Interdum hendrerit viverra gravida tempus laoreet. Pulvinar velit vitae per. Scelerisque bibendum ad cursus penatibus. Tellus pretium metus rhoncus vehicula dis felis eleifend. Lorem morbi tincidunt elementum.</p>
                        <ul className="story" >
                            {renderFarm()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

// import './style.css';

// export const story = {
//     title: "We bring dreams to come to life.",
//     list: [
//         {
//             numbers: 1000000,
//             title: "User Subscribes",
//         },
//         {
//             numbers: 135,
//             title: "Countries",
//         },
//         {
//             numbers: 14000,
//             title: "Movie Collections",
//         },
//         {
//             numbers: 950,
//             title: "Employees around the world",
//         },
//     ]
// }

// function formatNumber(num) {
//     return new Intl.NumberFormat().format(num);
// }

// export default function TheStory(props) {
//     function renderFarm() {
//         return props.data.list.map(function(story, i) {
//             return(
//                 <li key={i}>
//                     <h3>{formatNumber(story.numbers)}</h3>
//                     <h6>{story.title}</h6>
//                </li>
//             )
//         });
//     }
    
//     return (
//         <div className="vertical-padding story-box">
//             <div className="container-main-title">
//                 <div className='story-box-wraper'>
//                     <h5>The Story</h5>
//                     <h1 className="title">{props.data.title}</h1>
//                     <p>Vitae pulvinar integer augue facilisis. Elementum inceptos sociosqu tortor pellentesque torquent nec magna. Tristique felis mollis viverra semper mus turpis vel. Posuere lacinia praesent taciti penatibus.</p>
//                     <p>Leo risus dignissim pellentesque inceptos elementum. Tortor scelerisque libero letius tempus suscipit mollis aliquet. Auctor odio habitasse per volutpat nulla. Interdum hendrerit viverra gravida tempus laoreet. Pulvinar velit vitae per. Scelerisque bibendum ad cursus penatibus. Tellus pretium metus rhoncus vehicula dis felis eleifend. Lorem morbi tincidunt elementum.</p>
//                     <ul className="story">
//                         {renderFarm()}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }