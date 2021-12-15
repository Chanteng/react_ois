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

export const getAllOrder = () => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection ("ois-media")
        .onSnapshot (
            (snapshot) => {
                let orders = [];
                snapshot.forEach((doc) => {
                    orders.push(doc.data());
                });
                console.log(orders);
                dispatch({type: "SET_ALL_ORDER", payload: orders})
            },
            (error) => {}
        )
    }}