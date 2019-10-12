import React from 'react';
import './shopping-table.css'

const ShoppingTable = ({item, total, onInc, onDec, onDel}) => {
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
                    <tr className="tabbleRow">
                        <td>1</td>
                        <td>1</td>
                        <td>book 1</td>
                        <td>100$</td>
                        <td className="actions">
                            <div className="actions__item">-</div>
                            <div className="actions__item">+</div>
                            <div className="actions__item">del</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>total:</div>
        </div>
    )
}

export default ShoppingTable;