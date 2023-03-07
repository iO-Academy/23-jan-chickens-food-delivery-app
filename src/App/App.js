import './App.scss'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import {useState} from 'react'

function App() {
  const [page, setPage] = useState('listRestaurants')
  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} /> 
      <Main page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
