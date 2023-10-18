import { useEffect } from 'react'
import Header from './components/header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home';
import { getOrderFormById } from './helpers/vtex';
import use2BStore from './store/2bStore';

import './App.scss'

const App = () => {
  const { updateOrderForm, orderForm } = use2BStore()

  const setOrderForm = async (orderFormId: string | null) => {
    const orderForm = await getOrderFormById(orderFormId || '')

    updateOrderForm(orderForm)
    
    localStorage.setItem('orderFormId', orderFormId || '')
  }

  useEffect(() => {
    if (orderForm) return

    const orderFormId = localStorage.getItem('orderFormId');
    
    setOrderForm(orderFormId);
  })

  return (
    <Router>
        <Header />
        <Routes>
          {/* <Route path="/about">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App
