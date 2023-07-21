import './style.css';

export default function Header () {
    return (
      <div className="header">
            <div className='container'>
                <div className='header-style'>
                    <div className="menu-bar">
                            <div className="menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        <img src='/assets/images/logo.png'/>     
                    </div>
                    <div className="actions">
                        <button className="main-button-gradient-font">sign in</button>
                        <button className="main-button">go permium</button>
                    </div>
                </div>
            </div>
      </div>
    );
}