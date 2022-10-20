import './Header.css';

function Header(props) {
    return (
        <header>
            <h1 className="heading text">
                <a href={props.opensea}>Northern Lights</a>
            </h1>
        </header>
    )
}

export default Header;