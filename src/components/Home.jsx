import Header from './Header'
import MenuBar from './MenuBar'
import '../styling/Home.css'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive'


function Home() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className={`${isTabletOrMobile ? "home--mobile" : "home"}`}>
            <Header />
            <MenuBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Home