import { useEffect, useState } from 'react'
import './Menu.scss'

const Menu = (props) => {
    // conatiner for different items of the menu

    const [foodItems, setFoodItems] = useState(null)
    useEffect(() => {
        if (props.restaurantDetails) {
            setFoodItems(props.restaurantDetails.foodItems)
        }
    }, [props.restaurantDetails])

    console.log(props.displayRestaurantsOrMenu)
    return (
        // this props value will change and display the menu
        <div className={`menu ${props.displayRestaurantsOrMenu}`}>
            <div className='container'>
                <div className='row'>
                    {foodItems?.map(foodItem =>
                        <div className="card col-sm-12 col-md-2 col-lg-2 m-3 foodItemCard" key={foodItem}>
                            <div className="card-body">
                                <h2 className="card-title">{foodItem.foodName}</h2>
                                <div className="tagContainer">
                                    {foodItem.calories && <h3 className="card-subtitle caloriesTag">Calories: {foodItem.calories}</h3>}
                                {foodItem.foodType && <h3 className="card-subtitle typeTag">Type: {foodItem.foodType}</h3>}
                                {foodItem.sideItem && <h3 className="card-subtitle sideTag">Side</h3>}
                                </div>
                                {foodItem.price && <p className="card-text priceTag">£{foodItem.price}</p>}

                            </div>
                        </div>
                    ) ?? <p>Loading</p>}
                </div>
            </div>
        </div>

    )
}

export default Menu