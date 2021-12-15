const initialState = {
  orders: [],
};


const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      //   console.log(action.payload);
      return { ...state, orders: [...state.orders, action.payload] };



    case "DELETE_ORDER":
      const filteredOrders = state.orders.filter(
        (order) => order.id !== action.payload
      );
      return { ...state, orders: filteredOrders };




    case "EDIT_ORDER":
      const updatedOrder = state.orders.map((order) => {
        if (order.id === action.payload.orderId) {
          return action.payload.updatedOrder;
        }
        return order;
      });

      return { ...state, orders: updatedOrder };


      case "SET_ALL_CORDER":
        return { ...state, orders: action.payload };
  

    default:
      return state;
  }
};



export default orderReducers;
