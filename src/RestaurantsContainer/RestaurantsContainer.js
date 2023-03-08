import './RestaurantsContainer.scss'

const RestaurantsContainer = (props) => {

    // need to add all of this into existing Restaurant component
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
            {/* make sure all buttons have this format (data-attribute and onClick function) */}
            {/* replace whole div with Story 1 - keep classNames resaurants and props*/}
            <button data-restaurant-id="1" onClick={handleRestaurantChoice}>Wednys</button>
        </div>
    )
}

export default RestaurantsContainer