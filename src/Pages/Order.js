import React from 'react'
import OrderForm from '../Component/OrderForm';
import OrderList from '../Component/OrderList';
import HomeNav from '../Components/HomeNav'

function Order() {
    return (
        <div>
           <HomeNav />
           <OrderForm  />
  <OrderList />
        </div>
    )
}

export default Order
