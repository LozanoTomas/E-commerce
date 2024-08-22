import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const NavBar = () => {
  return (
    <header>
        <h1>Radiant Weave</h1>
        <nav>
            <ul>
                <a href=""><li>Todos</li></a>
                <a href=""><li>Remeras</li></a>
                <a href=""><li>Jeans</li></a>
                <a href=""><li>Buzos</li></a>
            </ul>
        </nav>

        <CartWidget></CartWidget>
    </header>
  )
}

<ItemListContainer></ItemListContainer>
export default NavBar