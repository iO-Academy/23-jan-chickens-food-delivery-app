import './Counter.scss'

import {useState} from 'react'

const Counter = (props) => {

    const handleClickIncrement = () => {
        props.setOrder(props.createOrder(
            props.order.items.map((item, index) => {
                if(index == props.indexOfItem) {
                    return {...item, qty: item.qty+1}
                } else {
                    return item    
                }
            })
        ))
    }
    const handleClickDecrement = () => {
        props.setOrder(props.createOrder(
            props.order.items.map((item, index) => {
                if(item.qty >= 1) {
                    if(index == props.indexOfItem) {
                        return {...item, qty: item.qty-1}
                    } else {
                        return item    
                    }
                }
                return item
            })
        ))
    }
 
    return (
        <div>
            <button className="btn btn increment" onClick={handleClickIncrement}>+</button>
            <span className="itemQuantity">{props.quantity}</span>
            <button className="btn btn decrement" onClick={handleClickDecrement}>-</button>
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