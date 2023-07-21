import './style.css';

export const faq = {
    title: "Frequently ask questions.",
    list: [
        {
            question: "Tempor metus est quam volutpat himenaeos bibendum?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Sagittis mollis est semper etiam letius felis?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Est luctus sodales curabitur eget?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Congue fames sapien eleifend augue?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Interdum potenti per nec ligula habitant sem dui?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
        {
            question: "Ipsum lacinia mollis sagittis quisque hac class litora?",
            answer: "Pulvinar nisi ullamcorper odio cubilia nibh lacinia etiam pretium mollis egestas condimentum. Malesuada faucibus quam per nunc ut consequat magna imperdiet. Massa tristique porta mi elit lobortis risus.",
        },
    ]
}
export default function FrequentlyAskQuestions(props) {
    function renderFarm() {
        return props.data.list.map(function(faq, i) {
            return(
                <li key={i}>
                    <div className='faq-holder'>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
               </li>
            )
        });
    }
    return (
        <div className="vertical-padding faq-box">
            <div className="container">
                <div className='faq-style'>
                    <div className='faq-description'>
                        <h6>FAQ</h6>
                        <h1 className="title">{props.data.title}</h1>
                        <p className='descriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <ul className="faq">
                        {renderFarm()}
                    </ul>
                </div>
            </div>
        </div>
    )
}