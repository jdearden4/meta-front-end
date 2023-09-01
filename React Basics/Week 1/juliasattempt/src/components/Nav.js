function Nav(props) {
    return (
        <nav className="nav-section">
            <h3>Julia Dearden</h3>
            <ul>
                <li>
                    <a href={props.nav1url}>{props.nav1}</a>
                </li>
                <li>
                    <a href={props.nav2url}>{props.nav2}</a>
                </li>
                <li>
                    <a href={props.nav3url}>{props.nav3}</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;