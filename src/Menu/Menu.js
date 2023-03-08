import './Menu.scss'

const Menu = (props) => {
    // conatiner for different items of the menu
    return (
        // this props value will change and display the menu
        <div className={`menu ${props.displayRestaurantsOrMenu}`}>
            <p>Menu placeholder</p>
        </div>
    )
}

export default Menu