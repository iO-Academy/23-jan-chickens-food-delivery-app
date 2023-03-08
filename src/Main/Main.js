import './Main.scss'
import burgerImage from './burgers.webp'
import Navbar from '../Navbar/Navbar'
import Title from '../Title/Title'
import RestaurantsContainer from '../RestaurantsContainer/RestaurantsContainer'

function Main() {
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
      <RestaurantsContainer />
      <footer className="m-3 p-3 border-top footer text-start fw-semibold">
        © Copyright iO Academy 2023
      </footer>
    </main>
  )
}

export default Main
