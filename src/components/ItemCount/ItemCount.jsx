import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        stock !== count && setCount(count + 1);
    };

    const substract = () => {
        initial !== count && setCount(count - 1);
    };
    return (
        <div className="count container bg-warning mb-4">
            <div className="buttons">
                <button className="btn btn-primary" onClick={add}>+</button>
                <p>{count}</p>
                <button className="btn btn-danger" onClick={substract}>-</button>
            </div>
            <div className="add-cart">
                <button className="btn btn-success" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
