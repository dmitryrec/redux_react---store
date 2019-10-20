import React from 'react';
import { connect } from 'react-redux';


const Cart = ({total})=> {
    if(total) {
       return <div>total: {total} $</div>
    }
    return <div>order is empty</div>
};

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

export default connect(mapStateToProps)(Cart);

