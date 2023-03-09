import { useState } from 'react'
import './Main.scss'
import burgerImage from './burgers.webp'
import Menu from '../Menu/Menu'
import Navbar from '../Navbar/Navbar'
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer'
import Title from '../Title/Title'

const Main = () => {

    const [displayRestaurantsOrMenu, setDisplayRestaurantsOrMenu] = useState('show-restaurants')
    const [restaurantDetails, setRestaurantDetails] = useState(null)

    return (
        <main>
            <Navbar displayRestaurantsOrMenu={displayRestaurantsOrMenu}
                setDisplayRestaurantsOrMenu={setDisplayRestaurantsOrMenu} />
            <div style={{ backgroundImage: "url('" + burgerImage + "')" }} className="banner m-md-3">
                <div className="d-flex flex-row justify-content-center align-items-center h-100 m-3">
                    <div className="bg-light flex-row justify-content-center align-items-center d-flex m-0 title-box p-3">
                        <Title displayRestaurantsOrMenu={displayRestaurantsOrMenu} 
                            restaurantDetails={restaurantDetails} />
                    </div>
                </div>
            </div>
            <RestaurantsContainer setRestaurantDetails={setRestaurantDetails}
                displayRestaurantsOrMenu={displayRestaurantsOrMenu}
                setDisplayRestaurantsOrMenu={setDisplayRestaurantsOrMenu} />
            <Menu displayRestaurantsOrMenu={displayRestaurantsOrMenu} restaurantDetails={restaurantDetails} />
            <footer className="m-3 p-3 border-top footer text-start fw-semibold">
                © Copyright iO Academy 2023
            </footer>
        </main>
    )
}

export default Main
