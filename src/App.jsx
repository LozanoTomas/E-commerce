import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/Cart'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './components/Checkout/Checkout'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='*' element={<h2>Sitio en Construccion</h2>}/>
        </Routes>
        </CarritoProvider>
        <ToastContainer />
      </BrowserRouter>

      
      
      
    </>
  )
}

export default App
