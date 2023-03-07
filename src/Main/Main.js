import './Main.scss'
import burgerImage from './burgers.webp'

function Main() {
  return (
    <main className="Main">
      <nav className="navbar navbar-expand border-bottom shadow-sm ps-4">
        <a href="#" className="navbar-brand fw-semibold">
          <span className="text-info">Food</span>
          <span>Delivery</span>
        </a>
      </nav>
      <div>
        <img src={burgerImage} />
      </div>
      <footer className="m-3 p-3 border-top footer text-start fw-semibold">
        © Copyright iO Academy 2023
      </footer>
    </main>
  )
}

export default Main
