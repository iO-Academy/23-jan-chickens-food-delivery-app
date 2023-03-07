import { useEffect, useState } from 'react'
import './BannerTextBox.scss'

const BannerTextBox = (props) => {

    const [restaurantName, setRestaurantName] = useState(null)




    useEffect(() => {
        // console.log(props.restaurantDetails.restaurant)
        if (props.restaurantDetails) {
            setRestaurantName(props.restaurantDetails.restaurant)
        }
    }, [props.restaurantDetails])


    return (
        <div>
            <p className={`bannerTextSplashPage ${props.page}`}>BannerTextBox placeholder</p>
            <p className={`bannerTextRestaurantName ${props.page}`}>{restaurantName ?? ''}</p>

        </div>
    )
}

export default BannerTextBox 