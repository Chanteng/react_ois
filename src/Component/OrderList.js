import React from 'react'
import Order from './Order'
import {connect} from 'react-redux'

function OrderList(props) {
    return (
        
        <div>
            {props.orders.map((order)=>{
                return (
                    <Order
                    order={order}
                    key={order.id}
                    />
                )
            })}
            
        </div>
    )
}

const mapState = (state) => {
    return {
        orders: state.orders
    }
}

export default connect(mapState)(OrderList)
