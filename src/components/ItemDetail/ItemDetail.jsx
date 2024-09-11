import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>Id: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque similique porro provident autem recusandae hic quisquam minus. Ex accusamus corrupti voluptate, dolore commodi, velit cum necessitatibus, nesciunt quae quasi cumque!</p>
    </div>
  )
}

export default ItemDetail