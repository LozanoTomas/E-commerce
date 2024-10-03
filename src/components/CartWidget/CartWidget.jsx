import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
const {cantidadTotal} = useContext(CarritoContext)

  return (
    <div>
      <Link to="/cart">
        <img className='imagencarrito' src="./imagenes/bolsa-de-la-compra.png" alt="" />
      </Link>
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
    </div>
  )
}

export default CartWidget