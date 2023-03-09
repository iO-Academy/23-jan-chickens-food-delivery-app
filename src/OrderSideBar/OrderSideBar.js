import './OrderSideBar.scss'
import { useState } from 'react'


const OrderSideBar = (props) => {
    const handleOrderClick = ()=>{
        fetch('http://localhost:8080/orders', {
            method: 'POST',
            body: JSON.stringify(props.order),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log('success!')
    }


    return (
        <div className="container-fluid">
            <div className="row px-3">
                <div className="col-sm-12 col-lg-9 col-xl-10"></div>
                <div className="card col-sm-12 col-lg-3 col-xl-2 border-0 bg-light p-0 =">
                    <div className="card-body p-0">
                        <div className="card-title text-start container">
                            <i className="cart-logo fa-solid fa-cart-shopping pt-3"></i>
                            <h3 className="order-heading ps-1 fs-5">Order</h3>
                        </div>
                        <div className="order-items text-start container">
                            {props.order.items.map((item, index) => {
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
                        <div className="row">
                            <p className="col-6 ps-3 text-nowrap mb-1">Sub-total:</p>
                            <span className="d-inline text-end col-6">£{props.order.total}</span>
                        </div>
                        <div className="row">
                            <p className="col-6 ps-3 text-nowrap mb-1">Delivery fee:</p>
                            <span className="d-inline text-end col-6 text-nowrap">£0.99</span>
                        </div>
                        <div className="row">
                            <p className="col-6 ps-3 text-nowrap mb-1">Service fee:</p>
                            <span className="d-inline text-end col-6">£1.50</span>
                        </div>
                        <div className="row">
                            <p className="col-6 ps-3 fw-bold mb-3">Total:</p>
                            <span className="d-inline text-end col-6 fw-bold">£{props.order.total+0.99+1.5}</span>
                        </div>
                        <button className="btn btn-success" onClick={handleOrderClick}>Place Order</button>
                        </div>
                        <div>
                            <button class="order-button btn btn-success">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSideBar