import Placeholder from "../img/placeholder.png"

function Testimonials() {
    return (
        <div className="green-bg testimonials row">
            <h1 className="yellow text-center">Testimonials</h1>
            <div className="card-container">
                <div className="rating-card">
                    <h3>Rating</h3>
                    <div className="user-profile">
                        <img src={Placeholder}></img>
                        <h3>Name</h3>
                    </div>
                    <p>User profile</p>
                </div>
                <div className="rating-card">
                    <h3>Rating</h3>
                    <div className="user-profile">
                        <img src={Placeholder}></img>
                        <h3>Name</h3>
                    </div>
                    <p>User profile</p>
                </div>
                <div className="rating-card">
                    <h3>Rating</h3>
                    <div className="user-profile">
                        <img src={Placeholder}></img>
                        <h3>Name</h3>
                    </div>
                    <p>User profile</p>
                </div>
                <div className="rating-card">
                    <h3>Rating</h3>
                    <div className="user-profile">
                        <img src={Placeholder}></img>
                        <h3>Name</h3>
                    </div>
                    <p>User profile</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;