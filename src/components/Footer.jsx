import '../styling/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

function Footer() {
    let location = useLocation()

    return (
        <div className='footer'>
            {location.pathname == "/events" && <div className='footer--msg'>Hope to see you soon!</div>}
            <div className='footer--follow--me'>For the latest news, follow me <a href="https://www.instagram.com/yarnshaper/?hl=en">@yarnshaper</a> on Instagram!</div>
            <div className='footer--icons'>
                <a href="https://www.instagram.com/yarnshaper/?hl=en">
                    <FontAwesomeIcon icon={faInstagram} size='2xl'/>
                </a>
                <a href="https://www.facebook.com/yarnshaper">
                    <FontAwesomeIcon icon={faFacebook} size='2xl'/>
                </a>
                <a href="mailto:theyarnshaper@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size='2xl'/>
                </a>
            </div>
        </div>
    )
}

export default Footer