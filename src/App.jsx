import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"
import About from "./components/About"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from './components/Home';
import Footer from './components/Footer';
import AddtoCart from './components/AddtoCart';
import { Logout } from './components/Logout';
import Pagenotfound from './components/Pagenotfound';
import UserAddress from './components/userAddress';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QjaaaF3HItw7weRLgk7hGKSfTHmk3ZqTPlAmkZvhbu3ea8x842hYJlMU5RCrUjAsT7kaFEeYoVe3xqVhmli7fBn00FpKfdzIg');

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addtocart' element={<AddtoCart />} />
          <Route path='/user-address' element={<UserAddress />} />
          <Route
            path='/payment'
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
