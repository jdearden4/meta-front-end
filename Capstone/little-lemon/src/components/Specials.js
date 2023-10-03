import GreekSalad from "../img/greeksalad.jpg"
import Bruschetta from "../img/bruschetta.png"
import LemonDessert from "../img/lemon dessert.jpg"


import DeliveryIcon from "../img/deliveryicon.svg"

function Specials() {
    const onlineMenu = function() {
        alert('This is a placeholder for now. Please select something else!')
    }
    return (
        <div className="specials row">
            <div className="card-container edge">
                <h1>This Week's Specials!</h1>
                <button onClick={onlineMenu} className="yellow-button"><a href="#">Online Menu</a></button>
            </div>
            <div className="card-container">
            <div className="card">
                    <img className="card-img" src={GreekSalad}/>
                    <div className="card-content">
                        <div className="card-row title">
                            <h3>Greek salad</h3>
                            <h5>$12.99</h5>
                        </div>
                        <div className="card-row">
                            <p>Lorem ipsum dolor sit amet consectetur. Mauris sagittis tristique dictum diam varius placerat. Pharetra pellentesque sit bibendum sed mattis urna.</p>
                        </div>
                        <div className="card-row">
                            <h3>Order delivery</h3>
                             <img className="delivery-icon" src={DeliveryIcon}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img" src={Bruschetta}/>
                    <div className="card-content">
                        <div className="card-row title">
                            <h3>Bruschetta</h3>
                            <h5>$5.99</h5>
                        </div>
                        <div className="card-row">
                            <p>Lorem ipsum dolor sit amet consectetur. Mauris sagittis tristique dictum diam varius placerat. Pharetra pellentesque sit bibendum sed mattis urna.</p>
                        </div>
                        <div className="card-row">
                            <h3>Order delivery</h3>
                             <img className="delivery-icon" src={DeliveryIcon}/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img" src={LemonDessert}/>
                    <div className="card-content">
                        <div className="card-row title">
                            <h3>Lemon Dessert</h3>
                            <h5>$5.00</h5>
                        </div>
                        <div className="card-row">
                            <p>Lorem ipsum dolor sit amet consectetur. Mauris sagittis tristique dictum diam varius placerat. Pharetra pellentesque sit bibendum sed mattis urna.</p>
                        </div>
                        <div className="card-row">
                            <h3>Order delivery</h3>
                             <img className="delivery-icon" src={DeliveryIcon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials;