import '../styling/Homepage.css'
import Imagecard from './Imagecard'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';


function Homepage() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    if (loading && data == null) {
        const url = "/.netlify/functions/get_home"
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(data => {
            setLoading(false);
            setData(data)
        })
        .catch(error => {
            setLoading(false);
            setError(error);
            console.error("error getting data: ", error);
        })
    }

    var cards = <><Imagecard/><Imagecard/></>

    if (!loading) {
        var values = data.values
        delete values[0]

        cards = values.map(item => {
            return (
                item[3] == "Y" ? <Link to={item[2]}><Imagecard img={item[1]} text={item[0]} mobile={isTabletOrMobile}/></Link> : <a href={item[2]}><Imagecard img={item[1]} text={item[0]} mobile={isTabletOrMobile}/></a>
            )
        })
    }

    return (
        <div className={`${isTabletOrMobile? "homepage--mobile" : "homepage"}`}>
            {cards}
        </div>
    )
}

export default Homepage