import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="item border border-dark">
            <h4>{item.name}</h4>
            <Link to={`/item/${item.id}`}>
                <img width="200px" src={item.img} alt="producto" />
            </Link>
            <p>${item.price}</p>
        </div>
    );
};

export default Item;
