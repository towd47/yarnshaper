import Event from "./Event";
import '../styling/Events.css';
import { useState } from 'react';

function Events() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showPast, setShowPast] = useState(false);
    
    if (loading && data == null) {
        const url = "/.netlify/functions/get_events"
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

    var events = <></>
    var past_events = <></>
    var divider_key = 0
    if (!loading) {
        var values = data.values
        if(values) {
            var now = new Date(new Date().getTime() - (1000*60*60*23));
            var keynum = -1
            values.sort(function(a, b) {
                let adate = new Date(a[4])
                let bdate = new Date(b[4])
                if (adate > bdate) return -1;
                else return 1;
            });
            values.reverse()
            events = values.map(item => {
                var event_date = new Date(item[4])
                if (event_date > now) {
                    keynum += 1
                    return (
                        <Event 
                            key={keynum}
                            id={keynum} 
                            img={item[6]}
                            title={item[0]}
                            description={item[1]}
                            link={item[2]}
                            date={item[4]}
                            time={item[5]}
                            location={item[3]}
                        />
                    )
                }
                else return null
            })

            let haveEvents = false
            events.forEach(e => {
                if (e != null) {
                    haveEvents = true
                }
            })
            if (!haveEvents) {
                events = <h1>No events planned for now, check back soon!</h1>
            }

            values.reverse()

            divider_key = keynum + 1
            keynum += 1

            past_events = values.map(item => {
                var event_date = new Date(item[4])
                if (event_date < now) {
                    keynum += 1
                    return (
                        <Event 
                            key={keynum}
                            id={keynum} 
                            img={item[6]}
                            title={item[0]}
                            description={item[1]}
                            link={item[2]}
                            date={item[4]}
                            time={item[5]}
                            location={item[3]}
                        />
                    )
                }
            })
        }
        else if (error) {
            events = <div>An error loading events occured. Please refresh the page or try again later.</div>
        }
    }

    return (
        <div>
            <div className="events">
                {events}
            </div>
            <div>
                {/* <h1 className={`${(divider_key % 2 == 0) ? "event--divider--darker" : "event--divider--lighter"} divider`} onClick={() => setShowPast(!showPast)}>{`${showPast ? "Hide Past Events" : "Show Past Events"}`}</h1> */}
                {/* <button type="button" className={`${(divider_key % 2 == 0) ? "event--divider--darker" : "event--divider--lighter"} divider`} onClick={() => setShowPast(!showPast)}>{`${showPast ? "Hide Past Events" : "Show Past Events"}`}</button> */}
            </div>
            <div className="events">
                {/* {showPast && past_events} */}
            </div>
        </div>
    )
}

export default Events