import { useEffect, useState } from 'react'
import './Title.scss'

const Title = (props) => {

    const [restaurantName, setRestaurantName] = useState(null)

    useEffect(() => {
        if (props.restaurantDetails) {
            setRestaurantName(props.restaurantDetails.restaurant)
        }
    }, [props.restaurantDetails])

    return (
        <div>
            {/* this will have to be replace with however the title has been formatted in story 1 */}
            <h1 className={`banner-title align-middle titleSplashPage ${props.displayRestaurantsOrMenu}`}>Food. Delivered.</h1>
            <p className={`align-middle fs-5 mb-0 catchPhrase ${props.displayRestaurantsOrMenu}`}>
              Order your favourite food from local restaurants, right to your door.
            </p>
            <h1 className={`titleRestaurantName ${props.displayRestaurantsOrMenu}`}>{restaurantName ?? ''}</h1>
        </div>
    )
}
export default Title 
