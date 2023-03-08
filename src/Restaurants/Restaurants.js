import './Restaurants.scss'

const Restaurants = (props) => {
    function handleRestaurantChoice(event) {
        let id = event.target.getAttribute('data-restaurant-id')
        let url = "http://localhost:8080/restaurants/" + id
        fetch(url)
            .then(response => response.json())
            .then(data => {
                props.setRestaurantDetails(data)
            })
        props.setDisplayRestaurantsOrMenu('menuRestaurant')
    }

    return (
        <div className={`restaurants ${props.displayRestaurantsOrMenu}`}>
            <button data-restaurant-id="1" onClick={handleRestaurantChoice}>Wednys</button>
        </div>
    )
}

export default Restaurants