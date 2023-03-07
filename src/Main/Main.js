import { useState } from 'react'
import BannerTextBox from '../BannerTextBox/BannerTextBox'
import Menu from '../Menu/Menu'
import Restaurants from '../Restaurants/Restaurants'


const Main = (props) => {

    const [restaurantDetails, setRestaurantDetails] = useState(null)

    return (
        <div>
            
            <Restaurants restaurantDetails={restaurantDetails} setRestaurantDetails={setRestaurantDetails} 
                page={props.page} setPage={props.setPage} />
            <BannerTextBox page={props.page} setPage={props.setPage} restaurantDetails={restaurantDetails}/>
            <Menu page={props.page} setPage={props.setPage} />
        </div>
    )
}

export default Main