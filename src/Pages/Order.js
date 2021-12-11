import React from 'react'
import OrderForm from '../Component/OrderForm';
import OrderList from '../Component/OrderList';
import Footer from '../Components/Footer';
import HomeNav from '../Components/HomeNav'
import Testimonial from '../Components/Testimonial';

function Order() {
    return (
        <div>
           <HomeNav />
           <OrderForm  />
  <OrderList />

  <Testimonial />
  <Footer />
        </div>
    )
}

export default Order
