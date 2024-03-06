import '../styling/About.css'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';

function About () {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    if (loading && data == null) {
        const url = "/.netlify/functions/get_about"
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

    var tiff = "yarnshaper"
    var description = ""

    if (!loading) {
        console.log(data)
        data.values.map(item => {
            tiff = item[1]
            description = item[0]
        })
    }

    return (
        <div className='about'>
            <h1 className='about--header'>About</h1>
            <div className={`${isTabletOrMobile ? 'about--profile--mobile' : 'about--profile'}`}>
                {!loading && <p className={`${isTabletOrMobile? 'about--paragraph--mobile' : 'about--paragraph'}`}>{description}</p>}
                {!isTabletOrMobile && !loading && <img src={tiff} alt="yarnshaper" className='profile--image' />}
                {isTabletOrMobile && !loading && <img src={tiff} alt="yarnshaper" className='profile--image--mobile' />}
            </div>
        </div>
    )
}

export default About