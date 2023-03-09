import { useEffect, useState } from 'react'
import './RestaurantsContainer.scss'

const RestaurantsContainer = (props) => {

    const [restaurants, setRestaurants] = useState(null)    
    useEffect(() => {
        fetch('http://localhost:8080/restaurants')
            .then(response => {
                return response.json()
            }).then((data) => {
                setRestaurants(data)
            })
    }, [])

    function handleRestaurantChoice(event) {
        let id = event.target.getAttribute('data-restaurant-id')
        let url = "http://localhost:8080/restaurants/" + id
        fetch(url)
            .then(response => response.json())
            .then(data => {
                props.setRestaurantDetails(data)
            })
        props.setDisplayRestaurantsOrMenu('show-menu')
       
    }

    return (
        <div className={`container-fluid restaurants-container ${props.displayRestaurantsOrMenu}`}>
            <div className="row">
                {restaurants?.map(restaurant =>
                    <div key={restaurant.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 py-2">
                        <button className="restaurant-button btn btn-outline-primary btn-lg py-4 w-100" 
                                data-restaurant-id={restaurant.id} onClick={handleRestaurantChoice}>
                            {restaurant.name}
                        </button>
                    </div>
                ) ?? <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default RestaurantsContainer