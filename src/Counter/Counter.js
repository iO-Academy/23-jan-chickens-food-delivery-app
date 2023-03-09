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
        <div className="fw-semibold">
            <button className="btn fw-semibold increment" onClick={handleClickIncrement}>+</button>
            <span className="itemQuantity">{props.quantity}</span>
            <button className="btn fw-semibold decrement" onClick={handleClickDecrement}>-</button>
        </div>
    )
}

export default Counter