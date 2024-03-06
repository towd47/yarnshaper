import '../styling/Event.css'
import { useMediaQuery } from 'react-responsive'

function Event(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className={`${isTabletOrMobile ? "event--mobile" : "event"} ${(props.id % 2 == 0) ? "event--darker" : "event--lighter"}`}>
            <div className={`${isTabletOrMobile ? "event--image--container--mobile" : "event--image--container"}`}>
                {(props.img != null) ? <img src={props.img} alt={props.title} className="event--image"/> : <></>}
            </div>
            <div className='event--details'>
                <h1 className={`${isTabletOrMobile ? "event--title--mobile" : "event--title"}`} >{props.title}</h1>
                <span className={`${isTabletOrMobile ? "event--location--mobile" : "event--location"}`}>Where: {props.location}</span>
                <span className={`${isTabletOrMobile ? "event--date--mobile" : "event--date"}`}>When: {props.date} | {props.time}</span>
                <p className="event--description" >{props.description}</p>
                {(props.link != "") ? <span className='event--link--span'>For more details, <a href={props.link} className="event--link">CLICK HERE</a></span> : <></>}
            </div>
        </div>
    )
}

export default Event