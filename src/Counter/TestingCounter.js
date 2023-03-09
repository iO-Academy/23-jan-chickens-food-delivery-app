import { useState } from "react"

const TestingCounter = () => {

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
    let itemsArrayInitialState = menu.foodItems.map((item) => {
        let orderItem = {}
        orderItem.name = item.foodName
        orderItem.price = item.price
        orderItem.qty = 0
    })

    const [orderVariable, setOrderVariable] = useState({items: [], total: 0});

    setOrderVariable(orderVariable.items = itemsArrayInitialState)

    console.log(orderVariable)    


    return (TestingCounter()
    )
}

export default TestingCounter()