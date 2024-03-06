import logo from '../assets/logo.svg'
import '../styling/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <Link to='/#' className='header--link'><img src={logo} alt="logo" className='header--logo'/></Link>
        </header>
    )
}

export default Header