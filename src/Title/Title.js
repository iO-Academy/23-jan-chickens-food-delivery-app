import './Title.scss'

const Title = (props) => {
    return (
        <div>
            <h1 className={`banner-title align-middle landing-page-title ${props.displayRestaurantsOrMenu}`}>Food. Delivered.</h1>
            <p className={`align-middle fs-5 mb-0 catch-phrase ${props.displayRestaurantsOrMenu}`}>
              Order your favourite food from local restaurants, right to your door.
            </p>
            <h1 className={`title-restaurant-name ${props.displayRestaurantsOrMenu}`}>{props.restaurantDetails?.restaurant ?? ''}</h1>
        </div>
    )
}

export default Title 
