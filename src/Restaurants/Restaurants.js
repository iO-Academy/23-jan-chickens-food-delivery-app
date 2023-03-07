import { useState, use, useEffect } from 'react'
import './Restaurants.scss'

const Restaurants = (props) => {
    function handleRestaurantChoice(event) {
        let id = event.target.getAttribute('data-restaurant-id')
        let url = "http://localhost:8080/restaurants/" + id
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                props.setRestaurantDetails(data)
            })
        props.setPage('menuRestaurant')
    }
    // useEffect(()=> {
    //     console.log(props.restaurantDetails)
    // },[props.restaurantDetails])

    return (
        <div className={`restaurants ${props.page}`}>
            <button data-restaurant-id="1" onClick={handleRestaurantChoice}>Wednys</button>
        </div>
    )
}

export default Restaurants