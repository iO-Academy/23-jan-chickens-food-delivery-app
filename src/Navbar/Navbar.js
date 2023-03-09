import './Navbar.scss'

function Navbar(props) {
    function handleChangeRestaurant() {
        props.setDisplayRestaurantsOrMenu('listRestaurants')
    }  
    
    return (
    <nav className="navbar navbar-expand border-bottom shadow-sm px-4 justify-content-md-start justify-content-center">
        <a href="#" className="navbar-brand fw-bold m-0">
          <span className="brand-accent">Food</span>
          <span>Delivery</span>
        </a>
        <button className={`changeRestaurantButton ${props.displayRestaurantsOrMenu}`} onClick={handleChangeRestaurant}>
            Change Restaurant
        </button>
    </nav>
  )
}

export default Navbar
