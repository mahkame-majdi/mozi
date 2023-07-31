import './style.css';

export const story = {
    title: "We bring dreams to come to life.",
    list: [
        {
            numbers: "M+",
            title: "User Subscribes",
        },
        {
            numbers: "135+",
            title: "Countries",
        },
        {
            numbers: "14K+",
            title: "Movie Collections",
        },
        {
            numbers: "950+",
            title: "Employees around the world",
        },
    ]
}
export default function TheStory(props) {
    function renderFarm() {
        return props.data.list.map(function(story, i) {
            return(
                <li key={i}>
                    <h3>{story.numbers}</h3>
                    <h6>{story.title}</h6>
               </li>
            )
        });
    }
    
    return (
        <div className="vertical-padding story-box">
            <div className="container-main-title">
                <div className='story-box-wraper'>
                    <h5>The Story</h5>
                    <h1 className="title">{props.data.title}</h1>
                    <p>Vitae pulvinar integer augue facilisis. Elementum inceptos sociosqu tortor pellentesque torquent nec magna. Tristique felis mollis viverra semper mus turpis vel. Posuere lacinia praesent taciti penatibus.</p>
                    <p>Leo risus dignissim pellentesque inceptos elementum. Tortor scelerisque libero letius tempus suscipit mollis aliquet. Auctor odio habitasse per volutpat nulla. Interdum hendrerit viverra gravida tempus laoreet. Pulvinar velit vitae per. Scelerisque bibendum ad cursus penatibus. Tellus pretium metus rhoncus vehicula dis felis eleifend. Lorem morbi tincidunt elementum.</p>
                    <ul className="story">
                        {renderFarm()}
                    </ul>
                </div>
            </div>
        </div>
    )
}