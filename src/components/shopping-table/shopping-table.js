import React from 'react';
import './shopping-table.css'
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions'

const ShoppingTable = ({items, total, onInc, onDec, onDel}) => {
    const renderRow = (item, idx) => {
            const {id, title, count, total} = item;
               return (<tr className="tabbleRow" key={id}>
                    <td>{idx + 1}</td>
                    <td>{title}</td>
                    <td>{count}</td>
                    <td>{total} $</td>
                    <td className="actions">
                        <div onClick={()=>onDec(id)} className="actions__item">-</div>
                        <div onClick={()=>onInc(id)} className="actions__item">+</div>
                        <div onClick={()=>onDel(id)} className="actions__item">del</div>
                    </td>
                </tr>)
    }
    return (
        <div className="shoppingCartTable">
            <div className="headerCartTable"><h2>your order</h2></div>
            <table className="table">
                <thead>
                    {/* <tr className="tabbleRow">
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr> */}
                </thead>
                <tbody>
                   {
                       items.map(renderRow)
                   }
                </tbody>
            </table>
            <div>total: {total} $</div>
        </div>
    )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps =  {
        onInc: bookAddedToCart,
        onDec: bookRemovedFromCart,
        onDel: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTable);