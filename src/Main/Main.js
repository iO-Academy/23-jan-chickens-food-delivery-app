import './Main.scss'
import burgerImage from './burgers.webp'
import Navbar from '../Navbar/Navbar'
import BannerBoxFoodDelivered from '../BannerBoxFoodDelivered/BannerBoxFoodDelivered'

function Main() {
  return (
    <main className="Main">
      <Navbar />
      <div style={{backgroundImage: "url('" + burgerImage + "')"}} className="burger-image m-md-3">
        <div className="row justify-content-center align-items-center h-100 m-3">
          <div className="col-sm-12 col-md-5 semi-transparent bg-light h-50 flex-row justify-content-center align-items-center d-flex m-0">
            <BannerBoxFoodDelivered />
          </div>
        </div>
      </div>
      {/* Restaurants here */}
      <footer className="m-3 p-3 border-top footer text-start fw-semibold">
        © Copyright iO Academy 2023
      </footer>
    </main>
  )
}

export default Main
