import '../styling/Imagecard.css'

function Imagecard(props) {
    return (
        <div className={props.mobile ? 'imagecard--mobile' : 'imagecard'}>
            <button className={props.mobile ? 'imagecard--button--mobile' :'imagecard--button'}><img className="imagecard--image" src={props.img} alt="my image" /></button>
            <span className='imagecard--text'>{props.text}</span>
        </div>
    )
}

export default Imagecard