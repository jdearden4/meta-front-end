import AboutImage from "../img/about-img.png";


function About() {
    return (
        <div className="about row">
            <div className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Turpis suspendisse quam tempus vitae nulla a nisl felis volutpat. Nec non pharetra morbi elit interdum. Augue in fermentum nunc odio. Aliquet ut consectetur maecenas orci quam suscipit lobortis turpis. Massa elit morbi suscipit congue diam.</p>
            </div>
            <div className="about-images">
                <img className="about-img" alt="head chefs of the Little Lemon restaurant" src={AboutImage}/>
            </div>
        </div>
    )
}

export default About;