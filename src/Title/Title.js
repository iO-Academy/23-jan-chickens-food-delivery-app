import { useEffect, useState } from 'react'
import './Title.scss'

const Title = (props) => {

    // will need to add all of this to existing Title component

    const [restaurantName, setRestaurantName] = useState(null)
    
    useEffect(() => {
        if (props.restaurantDetails) {
            setRestaurantName(props.restaurantDetails.restaurant)
        }
    }, [props.restaurantDetails])


    return (
        <div>
            {/* this will have to be replace with however the title has been formatted in story 1 */}
            <p className={`titleSplashPage ${props.displayRestaurantsOrMenu}`}>Title placeholder</p>
            <p className={`titleRestaurantName ${props.displayRestaurantsOrMenu}`}>{restaurantName ?? ''}</p>

        </div>
    )
}

export default Title 