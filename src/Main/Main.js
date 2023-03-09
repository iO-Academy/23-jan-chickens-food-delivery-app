import './Main.scss'
import burgerImage from './burgers.webp'
import Navbar from '../Navbar/Navbar'
import Title from '../Title/Title'
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer'
import OrderSideBar from '../OrderSideBar/OrderSideBar'
import {useState} from 'react'

function Main() {

  const [order, setOrder] = useState({ items: [
      {
        name: "Big Mac",
        price: 12.49,
        qty: 1
      },
      {
        name: "Bigger Mac",
        price: 13.49,
        qty: 1
      },
      {
        name: "Biggest Mac",
        price: 14.49,
        qty: 1
      },
      {
        name: "Smallest Mac",
        price: 14.49,
        qty: 0
      },
      {
        name: "Tiniest Mac",
        price: 14.49,
        qty: 1
      }
    ],
    total: 124.45
  })


  return (
    <main>
      <Navbar />
      <div style={{ backgroundImage: "url('" + burgerImage + "')" }} className="burger-image m-md-3">
        <div className="d-flex flex-row justify-content-center align-items-center h-100 m-3">
          <div className="semi-transparent bg-light flex-row justify-content-center align-items-center d-flex m-0 title-box-width p-3">
            <Title />
          </div>
        </div>
      </div>
      {/* <RestaurantsContainer /> */}
      {/*<Menu /> */}
      <OrderSideBar order={order} setOrder={setOrder}/>
      <footer className="m-3 p-3 border-top footer text-start fw-semibold">
        © Copyright iO Academy 2023
      </footer>
    </main>
  )
}

export default Main
