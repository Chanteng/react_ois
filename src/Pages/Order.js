import React from "react";
import OrderForm from "../Component/OrderForm";
import OrderList from "../Component/OrderList";
import Footer from "../Components/Footer";
import HomeNav from "../Components/HomeNav";
import Testimonial from "../Components/Testimonial";

function Order() {
  return (
    <div>
      <HomeNav />
      <h1 className="order-txt">Welcome to the Order Page. <br/>Please fill the following forms to complete<br/>  the order process.</h1>
      <OrderForm />
      <OrderList />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Order;
