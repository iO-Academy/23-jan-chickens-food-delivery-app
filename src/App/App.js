import './App.scss';
import Counter from '../Counter/Counter';
import {useState, useEffect} from 'react'; 

function App() {

  const menu = {
    "restaurant":"Burger King",
    "foodItems":[
      {
        "foodName":"Whopper",
        "foodType":"Burger",
        "calories":660,
        "price":4.89
      },
      {
        "foodName":"Whopper Sandwich",
        "calories":660,
        "price":3.76
      }
    ]
  }  

const orderItems = menu.foodItems.map((item) => {
  let orderItem = {}
  orderItem.name = item.foodName
  orderItem.price = item.price
  orderItem.qty = 0
  return orderItem
})

const createOrder = (orderItems) => {
  const order = {items: orderItems, total: 0}

  return order
}

const [order, setOrder] = useState(createOrder(orderItems))

  useEffect(() => {
    console.log(order)
  }, [order])
  return (
    <div className="App">
      {order.items.map((orderItem, indexOfItem) => 
      <div> {orderItem.name}
      <Counter order={order} setOrder={setOrder} createOrder={createOrder} indexOfItem={indexOfItem} quantity={orderItem.qty}/>
      </div>)}
      {order.items.map((orderItem, indexOfItem) => 
      <div> {orderItem.name}
      <Counter order={order} setOrder={setOrder} createOrder={createOrder} indexOfItem={indexOfItem} quantity={orderItem.qty}/>
      </div>)}
      
      
      
    </div>
  );
}

export default App;
