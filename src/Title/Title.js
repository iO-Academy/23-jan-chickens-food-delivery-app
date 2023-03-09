import './Title.scss'

const Title = (props) => {
    return (
        <div>      
        <h1 className={`banner-title align-middle landing-page-title`}> {props.restaurantDetails?.restaurant ?? "Food. Delivered."}</h1>
        <p className={`align-middle fs-5 mb-0 catch-phrase ${props.displayRestaurantsOrMenu}`}>
        {props.restaurantDetails? "": "Order your favourite food from local restaurants, right to your door."}
        </p>
    </div>
    )
}

export default Title 
