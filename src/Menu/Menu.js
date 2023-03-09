import './Menu.scss'

const Menu = (props) => {
    return (
        <div className={`menu container-fluid ${props.displayRestaurantsOrMenu}`}>
            <div className='row justify-content-center'>
                {props.restaurantDetails?.foodItems.map((foodItem, index) =>
                    <div className="p-2 col-sm-12 col-md-4 col-lg-2" key={index}>
                        <div className="card  food-item-card">
                            <div className="card-body" >
                                <h2 className="card-title">{foodItem.foodName}</h2>
                                <div className="tag-container">
                                    {foodItem.calories && <p className="calories-tag">Calories: {foodItem.calories}</p>}
                                    {foodItem.foodType && <p className="type-tag">Type: {foodItem.foodType}</p>}
                                    {foodItem.sideItem && <p className="side-tag">Side</p>}
                                </div>
                                {foodItem.price && <p className="card-text price-tag">£{foodItem.price}</p>}
                            </div>
                        </div>
                    </div>
                ) ?? <p>Loading...</p>}
            </div>
        </div>

    )
}

export default Menu