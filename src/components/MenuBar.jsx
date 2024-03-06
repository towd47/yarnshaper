import Navbar from 'react-bootstrap/Navbar'
import '../styling/MenuBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


function MenuBar() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <Navbar bg="light" expand="lg" className='menubar'>
            <Link to="/home" className={`${(activeIndex == 0) ? 'selected' : 'not-selected'}`} onClick={() => setActiveIndex(0)}>Home</Link>
            <Link to="/about" className={`${(activeIndex == 1) ? 'selected' : 'not-selected'}`} onClick={() => setActiveIndex(1)}>About</Link>
            <Link to="/events" className={`${(activeIndex == 2) ? 'selected' : 'not-selected'}`} onClick={() => setActiveIndex(2)}>Upcoming Events</Link>
            <Link to="/contact" className={`${(activeIndex == 3) ? 'selected' : 'not-selected'}`} onClick={() => setActiveIndex(3)}>Contact Me</Link>
            <Navbar.Text><a href="https://yarnshaper.square.site/" target="_blank">Shop <FontAwesomeIcon icon={faUpRightFromSquare}></FontAwesomeIcon></a></Navbar.Text>
        </Navbar>
    );
}

export default MenuBar