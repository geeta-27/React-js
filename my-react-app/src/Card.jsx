import Profile from './assets/Profile.jpg'
function Card(){
    return(
        <div className="Card">
            <img className="Card-image" src={Profile} alt="ProfilePic"></img>
            <h2 className="Card-title">All you need to know</h2>
            <h4>&copy; This is my card</h4>
            <p className="Card-text">I make YouTube videos that made me happy with playing games</p>
        </div>
    );
}

export default Card