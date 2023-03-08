import './Navbar.scss'

const Navbar = (props) => {

    // add all of this into existing nav bar component
    function handleChangeRestaurant() {
        props.setDisplayRestaurantsOrMenu('listRestaurants')
    }

    return (
        <button className={`changeRestaurantButton ${props.displayRestaurantsOrMenu}`} 
        onClick={handleChangeRestaurant}>Change Restaurant</button>
    )

}

export default Navbar