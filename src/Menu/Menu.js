import { useEffect, useState } from 'react'
import './Menu.scss'
import Counter from '../Counter/Counter'

const Menu = (props) => {
    const [foodItems, setFoodItems] = useState(null)

    useEffect(() => {
        if (props.restaurantDetails) {
            setFoodItems(props.restaurantDetails.foodItems)
        }
    }, [props.restaurantDetails])

    return (
        <div className={`menu container-fluid ${props.displayRestaurantsOrMenu}`}>
            <div className='row justify-content-center'>
                {foodItems?.map((foodItem, index) =>
                    <div className="p-2 col-sm-12 col-md-4 col-xl-2" key={index}>
                        <div className="card  food-item-card">
                            <div className="card-body" >
                                <h2 className="card-title">{foodItem.foodName}</h2>
                                <div className="tag-container">
                                    {foodItem.calories && <h3 className="card-subtitle calories-tag">Calories: {foodItem.calories}</h3>}
                                    {foodItem.foodType && <h3 className="card-subtitle type-tag">Type: {foodItem.foodType}</h3>}
                                    {foodItem.sideItem && <h3 className="card-subtitle side-tag">Side</h3>}
                                </div>
                                <div className="d-flex flex-row text-nowrap align-items-end justify-content-between">
                                    {foodItem.price && <p className="card-text price-tag mb-0 fs-6 me-1">£{foodItem.price}</p>}
                                    <Counter order={props.order}
                                             setOrder={props.setOrder}
                                             createOrder={props.createOrder}
                                             quantity={props.order.items[index].qty}
                                             indexOfItem={index}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) ?? <p>Loading</p>}
            </div>
        </div>

    )
}

export default Menu
