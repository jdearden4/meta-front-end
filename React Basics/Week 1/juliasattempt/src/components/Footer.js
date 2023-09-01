function Footer(props) {
    return (
        <section className="footer-section">
            <ul>
                <li>
                    <a href={props.footer1Url}>{props.footer1}</a>
                </li>
                <li>
                    <a href={props.footer2Url}>{props.footer2}</a>
                </li>
                <li>
                    <a href={props.footer3Url}>{props.footer3}</a>
                </li>
            </ul>
        </section>
    )
}

export default Footer;