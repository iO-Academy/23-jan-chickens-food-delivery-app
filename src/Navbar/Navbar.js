import './Navbar.scss'

const Navbar = (props) => {

    // add all of this into existing nav bar component
    function handleChangeRestaurant() {
        props.setDisplayRestaurantsOrMenu('listRestaurants')
    }

    return (
        <div className='navbar'>
            <p>Logo placeholder</p>
            <button className={`changeRestaurantButton ${props.displayRestaurantsOrMenu}`}
                onClick={handleChangeRestaurant}>{"<< Change Restaurant"}</button>
        </div>
    )

}

export default Navbar