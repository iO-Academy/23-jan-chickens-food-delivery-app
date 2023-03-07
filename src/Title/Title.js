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
            <p className={`titleSplashPage ${props.displayRestaurantsOrMenu}`}>Title placeholder</p>
            <p className={`titleRestaurantName ${props.displayRestaurantsOrMenu}`}>{restaurantName ?? ''}</p>

        </div>
    )
}

export default Title 