//import
import {useState} from 'react'

const Counter = () => {
    let orderVariableInitialState = menu.foodItems.map((item) => {
        let orderItem = {}
        orderItem.name = item.foodName
        orderItem.price = item.price
        orderItem.qty = 0
    })
    console.log(orderVariableInitialState)

    const [orderVariable, setOrderVariable] = useState(orderVariableInitialState);

    console.log(orderVariable)

    const handleClickIncrement = (indexOfItem) => {
        setOrderVariable((indexOfItem) => {
            orderVariable.map((item, index) => {
                if(index == indexOfItem) {
                    return {...item, qty: item.qty+1}
                } else {
                    return item    
                }
            })
        })
    }
    function handleClickDecrement(indexOfItem) {
       setOrderVariable((indexOfItem) => {
        orderVariable.map((item, index) => {
            if(item.qty >= 1) {
                if(index == indexOfItem) {
                    return {...item, qty: item.qty-1}
                } else {
                return item    
                }
            }
        })})
    } 
    return (
        <div>
            <button className="increment" onClick={handleClickIncrement}>+</button>
            <span className="itemQuantity">{TBC.qty}</span>
            <button className="decrement" onClick={() => handleClickDecrement(TBCITEMINDEX)}>-</button>
        </div>
    )
}

export default Counter

// {
//     "items": [
//         {"name": "example", "price": 12.49, "qty": 1},
//         {"name": "example 2", "price": 12.30, "qty": 1}
//     ],
//     "total": 24.79
// }


// Story 3 task 1 : make buttons that make number go up and down on click, display number, adds items to an order variable (useState) - make variable an object that we can use for POST request later


// counter component needs 2 props - number & setValue
// starts with an empty array of objects (order variable)
// order variable needs to go in main
// .map menu into the orders.items
// starts with quantity 0