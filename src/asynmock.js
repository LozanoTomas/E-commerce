import Item from "./components/Item/Item"

const misProductos = [
    {id: "1", nombre: "jeans celeste desgastado", stock: 10, precio: 20000, img: "https://acdn.mitiendanube.com/stores/234/062/products/whatsapp-image-2023-08-10-at-12-05-551-6aed9019d8e9e6d75b16923910480948-640-0.jpeg", idCat: "jeans"},
    {id: "2", nombre: "jeans negro overzise", stock: 12, precio: 35000, img: "https://http2.mlstatic.com/D_NQ_NP_698630-MLA75267638109_032024-O.webp", idCat: "jeans"},
    {id: "3", nombre: "remera black diseño espalda", stock: 4, precio: 15000, img: "https://http2.mlstatic.com/D_NQ_NP_961009-MLA74225414193_012024-O.webp", idCat: "remeras" },
    {id: "4", nombre: "remera white texto en negro", stock: 7, precio: 20000, img: "https://acdn.mitiendanube.com/stores/001/661/615/products/c084df20-b5ab-413a-9681-6fcd2c5d71c7-77417ff9c431d1583917050806240391-1024-1024.png", idCat: "remeras" },
    {id: "5", nombre: "buzo color crema", stock: 13, precio: 40000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNUvMis--DO7wj5DfETsIkv4R08voAgEmOB-xg3ojiypzr2JoTVlS4Jto2fqycpgGag8&usqp=CAU", idCat: "buzos" },
    {id: "6", nombre: "buzo marron oscuro", stock: 2, precio: 40000, img: "https://acdn.mitiendanube.com/stores/002/974/973/products/buzo-black-bird-2-309aadb1257d177d8517218822399030-480-0.jpg", idCat: "buzos" },
]

export const getProductos = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 100)
    })
}

export const getUnProducto = (id)=>{
    return new Promise (resolve =>{
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100);
    })
}

export const getProductosPorCategoria = (idCategoria)=>{
    return new Promise (resolve =>{
        setTimeout(() => {
           const producto = misProductos.filter(item => item.idCat === idCategoria)
           resolve(producto)
        }, 100);
    })
}