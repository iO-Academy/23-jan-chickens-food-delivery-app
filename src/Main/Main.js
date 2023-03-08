import { useState } from 'react'
import Title from '../Title/Title'
import Menu from '../Menu/Menu'
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer'
import Navbar from '../Navbar/Navbar'


const Main = () => {

    // will have to merge with story 1 and make sure it's consistent 
    // will need to declare new state variable
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
            {/* there will be a footer */}
        </div>
    )
}

export default Main