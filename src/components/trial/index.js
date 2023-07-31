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
                "Access to full library with thousands of movie",
                "HD+ Quality Streaming",
                "Watch on any device",
                "Stream on 1 device at a time",
                "Offline Viewing",
            ],
        },
        {
            package: "HD+ Package",
            premium: "Premium package streaming",
            payment: "$",
            price: "4",
            cent: "99",
            monthly: "monthly",
            features: [
                "No ads",
                "Access to full library with thousands of movie",
                "FullHD Quality Streaming",
                "Watch on any device",
                "Stream on 4 device at a time",
                "Offline Viewing",
            ],
        },
        {
            package: "HD+ Package",
            premium: "Premium package streaming",
            payment: "$",
            price: "4",
            cent: "99",
            monthly: "monthly",
            features: [
                "No ads",
                "Access to full library with thousands of movie",
                "4K Quality Streaming",
                "Watch on any device",
                "Stream on 8 device at a time",
                "Offline Viewing",
            ],
        },

    ]
}
export default function Trial(props) {
   function renderFarm() {
        return props.data.list.map(function(trial, i) {
            return(
                <li key={i}>
                    <div className='trial-box'>
                        <div className="trial-box-title">
                            <h3>{trial.package}</h3>
                            <h6>{trial.premium}</h6>
                        </div>
                        <div className="price">
                            <h2>{trial.payment}</h2>
                            <h2>{trial.price}</h2>
                            <h2>{trial.cent}</h2>
                            <h6>{trial.monthly}</h6>
                        </div>
                        <ul>
                            {trial.features.map(feature => (
                                <li key={feature}><i class="fa-solid fa-check"></i>{feature}</li>
                            ))}
                        </ul>
                        <button>Start your free Trial</button>
                        <p>*No credit card required</p>
                    </div>
                </li>
            )
        });
    }
    return (
        <div className="trial vertical-padding">
            <div className="container">
                <div className="trial-wraper">
                    <h1 className="trial-title">{props.data.title}</h1>
                    <h3>{props.data.subtitle}</h3>
                    <h3>{props.data.secondSubtitle}</h3>
                    <ul>
                        {renderFarm()}
                    </ul>
                    <p>*Video content availability may vary by country.</p>
                    <h1>Need help?</h1>
                    <button className="main-button">contact us</button>
                </div>
            </div>
        </div>
    )
}