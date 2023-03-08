import { useState } from 'react'
import Title from '../Title/Title'
import Menu from '../Menu/Menu'
import Restaurants from '../Restaurants/Restaurants'


const Main = (props) => {

     // will have to merge with story 1 and make sure it's consistent 
    // will need to declare new state variable
    const [restaurantDetails, setRestaurantDetails] = useState(null)

    
    return (
        <div>
            {/* need to add props to all of the below components */}
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