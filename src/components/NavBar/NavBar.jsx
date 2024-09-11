import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Radiant Weave</h1>
      </Link>
        <nav>
            <ul>
                <li><NavLink to="/">Todos</NavLink></li>
                <li><NavLink to="/categoria/remeras">Remeras</NavLink></li>
                <li><NavLink to="/categoria/jeans">Jeans</NavLink></li>
                <li><NavLink to="/categoria/buzos">Buzos</NavLink></li>
            </ul>
        </nav>

        <CartWidget></CartWidget>
    </header>
  )
}

<ItemListContainer></ItemListContainer>
export default NavBar