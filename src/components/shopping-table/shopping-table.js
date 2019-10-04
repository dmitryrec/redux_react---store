import React from 'react';
import './shopping-table.css'

const ShoppingTable = ()=> {
    return (
        <div className="shoppingCartTable">
            <h2>you order</h2>
            <table className="table">
                <thead>
                    <tr className="tabbleRow">
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tabbleRow">
                        <td>1</td>
                        <td>1</td>
                        <td>book 1</td>
                        <td>100$</td>
                        <td className="actions">
                            <button className="actions__item">-</button>
                            <button className="actions__item">+</button>
                            <button className="actions__item">del</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShoppingTable;