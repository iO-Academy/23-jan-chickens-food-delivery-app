import './Main.scss'
import burgerImage from './burgers.webp'
import Navbar from '../Navbar/Navbar'
import Title from '../Title/Title'

function Main() {
  return (
    <main>
      <Navbar />
      <div style={{backgroundImage: "url('" + burgerImage + "')"}} className="container-fluid burger-image m-md-3">
        <div className="row justify-content-center align-items-center h-100 m-3">
          <div className="col-sm-12 col-md-6 semi-transparent bg-light h-50 flex-row justify-content-center align-items-center d-flex m-0">
            <Title />
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
