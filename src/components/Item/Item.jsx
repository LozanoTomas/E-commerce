import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img className='imagenp' src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>Id: {id}</p>
        <p>Stock: {stock}</p>
        <Link className='link' to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  )
}

export default Item