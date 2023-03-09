import './OrderSideBar.scss'
import { useState } from 'react'


const OrderSideBar = (props) => {
    
    return (
        <div className="container-fluid">
            <div className="row px-3">
                <div className="col-sm-12 col-lg-9"></div>
                <div className="card col-sm-12 col-lg-3 border-0 bg-light p-0 =">
                    <div className="card-body p-0">
                        <div className="card-title text-start container">
                            <i className="cart-logo fa-solid fa-cart-shopping pt-3"></i>
                            <h3 className="order-heading ps-1 fs-5">Order</h3>
                        </div>
                        <div className="order-items text-start container">
                            {props.order.items.filter((item) =>
                                item.qty > 0
                            )
                                .map((item, index) => {
                                    return (
                                        // the span below is a temporary placeholder for the counter component
                                        <div key={index} className="row">
                                            <p className="fw-bold col-7 ps-3">{item.name}</p>
                                            <span className="d-inline text-end col-5"> + {item.qty} - </span> 
                                        </div>
                                    )
                                }
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSideBar