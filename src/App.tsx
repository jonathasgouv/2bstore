import { useEffect } from 'react'
import Header from './components/header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home';
import { getOrderFormById } from './helpers/vtex';
import use2BStore from './stores/2bStore';

import './App.scss'
import MiniCart from './components/miniCart';
import Footer from './components/footer';
import Product from './pages/product';
import Wrapper from './Wrapper';
import MobileMenu from './components/mobileMenu';

const App = () => {
  const { updateOrderForm, orderForm } = use2BStore()

  const setOrderForm = async (orderFormId: string | null) => {
    const orderForm = await getOrderFormById(orderFormId || '')

    updateOrderForm(orderForm)

    localStorage.setItem('orderFormId', orderForm?.orderFormId || '')
  }

  useEffect(() => {
    if (orderForm) return

    const orderFormId = localStorage.getItem('orderFormId');

    setOrderForm(orderFormId);
  })

  return (
    <Router>
      <Wrapper>
        <MobileMenu />
        <MiniCart />
        <Header />
        <Routes>
          {/* <Route path="/about">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/:slug/p" element={<Product />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App
