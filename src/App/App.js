import './App.scss';
import Counter from '../Counter/Counter';

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
  return {items: orderItems, total: 0}
}

const [order, setOrder] = useState(createOrder(orderItems))



  return (
    <div className="App">
      {order.map(orderItem)}
    </div>
  );
}

export default App;
