import './App.scss'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import {useState} from 'react'

function App() {
  // will have to merge with story 1 and make sure it's consistent 
  // will have to declare new state variable
  const [displayRestaurantsOrMenu, setDisplayRestaurantsOrMenu] = useState('listRestaurants')
  return (
    <div className="App">
      <Navbar displayRestaurantsOrMenu={displayRestaurantsOrMenu} 
        setDisplayRestaurantsOrMenu={setDisplayRestaurantsOrMenu} /> 
      <Main displayRestaurantsOrMenu={displayRestaurantsOrMenu} 
        setDisplayRestaurantsOrMenu={setDisplayRestaurantsOrMenu}/>
    </div>
  );
}

export default App;
