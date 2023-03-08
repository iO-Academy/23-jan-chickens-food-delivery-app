import './Navbar.scss'

const Navbar = (props) => {

    function handleChangeRestaurant() {
        props.setDisplayRestaurantsOrMenu('listRestaurants')
    }

    return (
        <button className={`changeRestaurantButton ${props.displayRestaurantsOrMenu}`} 
        onClick={handleChangeRestaurant}>Change Restaurant</button>
    )

}

export default Navbar