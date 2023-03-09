import './OrderSideBar.scss'
import { useState } from 'react'


const OrderSideBar = (props) => {
    return (

        <div className="card-body p-0 bg-light">
            <div className="card-title text-start container pb-3 pt-3">
                <i className="cart-logo fa-solid fa-cart-shopping p"></i>
                <h3 className="order-heading ps-1 fs-5">Order</h3>
            </div>
            <div className="order-items text-start container">
                {props.order?.items.map((item, index) => {
                    return { ...item, index: index }
                }).filter((item) =>
                    item.qty > 0
                ).map((item, index) => {
                    return (
                        // the span below is a temporary placeholder for the counter component
                        <div key={index} className="row">
                            <p className="fw-bold col-8 ps-3">{item.name}</p>
                            <span className="d-inline text-end col-4"> + {item.qty} - </span>
                        </div>
                    )
                }
                )}
            </div>
        </div>

    )
}

export default OrderSideBar