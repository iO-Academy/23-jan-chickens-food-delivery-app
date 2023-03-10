import './Navbar.scss'

const Navbar = (props) => {
    function handleChangeRestaurant() {
        props.setDisplayRestaurantsOrMenu('show-restaurants')
        props.setRestaurantDetails(null)
    }

    return (
        <nav className="navbar border-bottom shadow-sm px-4 flex-column flex-md-row">
            <div>
                <a href="#" onClick={handleChangeRestaurant} className="navbar-brand fw-bold m-0">
                    <span className="brand-accent">Food</span>
                    <span>Delivery</span>
                </a>
            </div>
            <button className={`change-restaurant-button ${props.displayRestaurantsOrMenu}`} onClick={handleChangeRestaurant}>
                {"<< Change Restaurant"} 
            </button>
        </nav>
    )
}

export default Navbar
