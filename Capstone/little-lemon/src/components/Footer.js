import footerPicture from "../img/restaurant.jpg"

function Footer() {
    return (
        <footer className="green-bg footer">
            <img src={footerPicture} alt="Little Lemon Restaurant indoors"></img>
            <ul className="footerCategory">
                <h3>Doormat Navigation</h3>
                <li><a href="App.js">Home</a></li>
                <li><a href="App.js">About</a></li>
                <li><a href="App.js">Menu</a></li>
                <li><a href="App.js">Reservations</a></li>
                <li><a href="App.js">Order Online</a></li>
                <li><a href="App.js">Login</a></li>
            </ul>
            <ul className="footerCategory">
                <h3>Contact</h3>
                <li><a href="App.js">Address</a></li>
                <li><a href="App.js">Phone Number</a></li>
                <li><a href="App.js">Email</a></li>
            </ul>
            <ul className="footerCategory">
                <h3>Social Media Links</h3>
                <li><a href="App.js">Address</a></li>
                <li><a href="App.js">Phone Number</a></li>
                <li><a href="App.js">Email</a></li>
            </ul>
        </footer>
    )
}

export default Footer;