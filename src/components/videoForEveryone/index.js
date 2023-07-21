import './style.css';

export const video = {
    title: "Video for Everyone",
    list: [
        {
            imageSrc: '/assets/images/family.JPG',
            link: "#",
            heading: "Family Movies",
            describe: "Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna",
        },
        {
            imageSrc: '/assets/images/friends.JPG',
            link: "#",
            heading: "Teen Movies",
            describe: "Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna",
        },
        {
            imageSrc: '/assets/images/kids.JPG',
            link: "#",
            heading: "Kids Movies",
            describe: "Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna",
        },
        {
            imageSrc: '/assets/images/football.JPG',
            link: "#",
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
    return (
        <div className="video-for-everyone vertical-padding">
            <div className="container">
                <h1 className="title">{props.data.title}</h1>
                <ul className="video-box">
                    {renderFarm()}
                </ul>
            </div>
        </div>
    )
}