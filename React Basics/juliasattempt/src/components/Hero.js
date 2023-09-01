function Hero(props) {
    return (
        <section className="hero-section">
                <h1 className='header'>{props.header}</h1>
                <h2 className='subheader'>{props.subheader}</h2>
        </section>
    )
}

export default Hero;