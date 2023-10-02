import headerImg from "../img/restauranfood.jpg"
import {Link} from 'react-router-dom';

function CallToAction() {
    return (
        <div className="cta green-bg white">
            <div className="cta-text">
                <h1 className="yellow">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Auctor eu commodo etiam senectus ullamcorper et lorem. </p>
            <Link to="/reserve"><button className="yellow-button">Reserve a table</button></Link>
            </div>
            <div className="cta-image">
                <img src={headerImg}/>
            </div>
        </div>
    )
}

export default CallToAction;