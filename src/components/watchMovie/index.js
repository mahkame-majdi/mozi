import './style.css';

export default function WatchMovie(){
    return(
        <div className='watch'>
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