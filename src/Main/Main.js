import './Main.scss'
import burgerImage from './burgers.webp'

function Main() {
  return (
    <main className="Main">
      <nav className="navbar navbar-expand border-bottom shadow-sm ps-4">
        <a href="#" className="navbar-brand fw-semibold text-sm-center">
          <span className="text-info">Food</span>
          <span>Delivery</span>
        </a>
      </nav>
      <div style={{
        height: "400px", 
        backgroundImage: "url('" + burgerImage + "')",
        backgroundSize: "100%",
        backgroundPosition: "0% 20%",
        backgroundRepeat: "no-repeat"
        }} className="m-md-3">
          <div className="row justify-content-center align-items-center h-100 m-3">
            <div className="col-sm-12 col-md-5 semi-transparent bg-light h-50 flex-row justify-content-center align-items-center d-flex m-0">
              <div>
              <h2 className="text-info fs-1 align-middle">Food. Delivered.</h2>
              <p className="align-middle fs-5 mb-0">Order your favourite food from local restaurants, right to your door.</p>
              </div>
            </div>
          </div>
      </div>
      <footer className="m-3 p-3 border-top footer text-start fw-semibold">
        © Copyright iO Academy 2023
      </footer>
    </main>
  )
}

export default Main
