import './Navbar.scss'

const Navbar = (props) => {

    function handleChangeRestaurant() {
        props.setPage('listRestaurants')
    }

    return (
        <button className={`changeRestaurantButton ${props.page}`} onClick={handleChangeRestaurant}>Change Restaurant</button>
    )

}

export default Navbar