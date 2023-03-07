import { useState } from 'react'
import Restaurants from '../Restaurants/Restaurants'
import Menu from '../Menu/Menu'

const Main = (props) => {

    const [restaurantDetails, setRestaurantDetails] = useState(null)

    return (
        <div>
            <Restaurants restaurantDetails={restaurantDetails} setRestaurantDetails={setRestaurantDetails} 
                page={props.page} setPage={props.setPage} />
            <Menu page={props.page} setPage={props.setPage} />
        </div>
    )
}

export default Main