import { useEffect, useState } from 'react'
import './Menu.scss'

const Menu = (props) => {
    const [foodItems, setFoodItems] = useState(null)

    useEffect(() => {
        if (props.restaurantDetails) {
            setFoodItems(props.restaurantDetails.foodItems)
        }
    }, [props.restaurantDetails])

    return (
        <div className={`menu ${props.displayRestaurantsOrMenu}`}>
            <div className='container'>
                <div className='row'>
                    {foodItems?.map(foodItem =>
                        <div className="card col-sm-12 col-md-2 col-lg-2 m-3 food-item-card" key={foodItem.foodName}>
                            <div className="card-body">
                                <h2 className="card-title">{foodItem.foodName}</h2>
                                <div className="tag-container">
                                    {foodItem.calories && <h3 className="card-subtitle calories-tag">Calories: {foodItem.calories}</h3>}
                                {foodItem.foodType && <h3 className="card-subtitle type-tag">Type: {foodItem.foodType}</h3>}
                                {foodItem.sideItem && <h3 className="card-subtitle side-tag">Side</h3>}
                                </div>
                                {foodItem.price && <p className="card-text price-tag">£{foodItem.price}</p>}
                            </div>
                        </div>
                    ) ?? <p>Loading</p>}
                </div>
            </div>
        </div>

    )
}

export default Menu