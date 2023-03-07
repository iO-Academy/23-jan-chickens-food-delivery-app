import { useState } from 'react'
import Title from '../Title/Title'
import Menu from '../Menu/Menu'
import Restaurants from '../Restaurants/Restaurants'


const Main = (props) => {

    const [restaurantDetails, setRestaurantDetails] = useState(null)

    return (
        <div>
            <Title displayRestaurantsOrMenu={props.displayRestaurantsOrMenu}
                setDisplayRestaurantsOrMenu={props.setDisplayRestaurantsOrMenu} restaurantDetails={restaurantDetails} />
            <Restaurants restaurantDetails={props.restaurantDetails} setRestaurantDetails={setRestaurantDetails}
                displayRestaurantsOrMenu={props.displayRestaurantsOrMenu}
                setDisplayRestaurantsOrMenu={props.setDisplayRestaurantsOrMenu} />  
            <Menu displayRestaurantsOrMenu={props.displayRestaurantsOrMenu}
                setDisplayRestaurantsOrMenu={props.setDisplayRestaurantsOrMenu} />
        </div>
    )
}

export default Main