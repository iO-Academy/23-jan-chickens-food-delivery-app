import { useState } from 'react'
import Menu from '../Menu/Menu'
import Navbar from '../Navbar/Navbar'
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer'
import Title from '../Title/Title'


const Main = () => {

     // will have to merge with story 1 and make sure it's consistent 
    // will need to declare new state variable???
    const [displayRestaurantsOrMenu, setDisplayRestaurantsOrMenu] = useState('listRestaurants')
    const [restaurantDetails, setRestaurantDetails] = useState(null)
    
    return (
        <div>
            {/* need to add props to all of the below components */}
            <Navbar displayRestaurantsOrMenu={displayRestaurantsOrMenu} 
                setDisplayRestaurantsOrMenu={setDisplayRestaurantsOrMenu} /> 

            <Title displayRestaurantsOrMenu={displayRestaurantsOrMenu}
                setDisplayRestaurantsOrMenu={setDisplayRestaurantsOrMenu} restaurantDetails={restaurantDetails} />
            <RestaurantsContainer restaurantDetails={restaurantDetails} setRestaurantDetails={setRestaurantDetails}
                displayRestaurantsOrMenu={displayRestaurantsOrMenu}
                setDisplayRestaurantsOrMenu={setDisplayRestaurantsOrMenu} />  
            <Menu displayRestaurantsOrMenu={displayRestaurantsOrMenu}
                setDisplayRestaurantsOrMenu={setDisplayRestaurantsOrMenu} />
        </div>
    )
}

export default Main