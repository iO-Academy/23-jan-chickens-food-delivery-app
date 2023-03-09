import { useEffect, useState } from 'react'
import './RestaurantsContainer.scss'

const RestaurantsContainer = () => {

    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/restaurants')
            .then(response => {
                return response.json()
            }).then((data) => {
                setRestaurants(data)
            })
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                {restaurants?.map(restaurant =>
                    <div key={restaurant.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 py-2">
                        <button className="restaurantButton btn btn-outline-primary btn-lg py-4 w-100" data-restaurant-id={restaurant.id}>{restaurant.name}</button>
                    </div>
                ) ??
                    <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default RestaurantsContainer