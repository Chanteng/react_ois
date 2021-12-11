export const addOrder = (newOrder) => {

    return {
        type: "ADD_ORDER",
        payload: newOrder
    };
};


export const deleteOrder = (orderId) => {
    return {
        type: "DELETE_ORDER",
        payload: orderId
    }
};


export const editOrder = (orderId, updatedOrder) => {
    return {
        type: "EDIT_ORDER", 
        payload: {orderId, updatedOrder}
    }
}