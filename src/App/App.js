import './App.scss';
import Main from '../Main/Main'
import {useState} from 'react'

function App() {
  const [page, setPage] = useState('listRestaurants')
  return (
    <div className="App">
      <Main page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
