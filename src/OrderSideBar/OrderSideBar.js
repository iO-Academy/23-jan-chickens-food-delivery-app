import './OrderSideBar.scss'
import { useState } from 'react'
import Counter from '../Counter/Counter'


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
                            <p className="fw-bold col-6 ps-3 m-0 py-3">{item.name}</p>
                            <span className="d-inline text-end col-6 text-nowrap">
                                <Counter order={props.order} setOrder={props.setOrder} createOrder={props.createOrder} indexOfItem={item.index} quantity={item.qty} />
                            </span>
                        </div>

                    )
                }
                )}
                <div className="row">
                    <p className="col-6 ps-3 text-nowrap mb-1">Sub-total:</p>
                    <span className="d-inline text-end col-6">£{(props.order?.total)?.toFixed(2)}</span>
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
                    <span className="d-inline text-end col-6 fw-bold">£{(props.order?.total + 0.99 + 1.5)?.toFixed(2)}</span>
                </div>
                <button className="btn btn-success">Place Order</button>
            </div>
        </div >


    )
}

export default OrderSideBar