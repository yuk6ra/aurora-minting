import './Footer.css';

function Footer(props) {
    return (
        <footer className='footer'>
            <div>
              <a href={`https://etherscan.io/address/${props.address}`}>
              View Etherscan
              </a>
              </div>

            <div className='footer-social-media-links'>
                <p>Built by &nbsp;<a href='https://twitter.com/yuk6ra'>@yuk6ra</a></p>
            </div>
        </footer>
    )
}

export default Footer;