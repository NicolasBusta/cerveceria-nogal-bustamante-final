import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Form from '../form/Form';
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Car = () => {
    const [data, setData] = useState({ name: '', email: '', phone: '' });
    const [orderId, setOrderId] = useState('');

    const { cart, deleteItem, totalPrice, deleteAll } = useContext(CartContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        /* const formatedCart = cart.map((prod) => {
            return {
                cantidad: prod.cantidad,
                id: prod.id,
            };
        }); */
        e.preventDefault();
        const objOrden = {
            buyer: {
                name: data.name,
                phone: data.phone,
                email: data.email,
            },
            cart,
            total: totalPrice(),
            date: serverTimestamp(),
        };

        const ref = collection(db, 'orders');
        addDoc(ref, objOrden).then((response) => {
            setOrderId(response.id);
            deleteAll();
        });
    };
    if (orderId !== '') {
        return <h1>Gracias por tu compra, tu número de envío es: {orderId}</h1>;
    }

    return (
        <>
            {cart.length === 0 ? (
                <div className="empty">Tu carrito está vacio</div>
            ) : (
                <>
                    <div className="cart bg-dark">
                        {cart.map((prod) => (
                            <div className="infoCart bg-light" key={prod.id}>
                                <img
                                    src={prod.img}
                                    alt={prod.name}
                                    width="50px"
                                />
                                <h2 className="fs-5">{prod.name}</h2>
                                <h2 className="fs-5">${prod.price}</h2>
                                <h2 className="fs-5">Cantidad: {prod.cantidad}</h2>
                                <button className="btn btn-danger" onClick={() => deleteItem(prod.id)}>
                                    Eliminar
                                </button>
                            </div>
                        ))}
                        <div className="cartBtn">
                            <h2 className="text-white">Total: ${totalPrice()}</h2>
                            <button className="btn btn-danger" onClick={deleteAll}>Vaciar carrito</button>
                        </div>
                    </div>
                    <Form
                        handleChange={handleChange}
                        data={data}
                        handleSubmit={handleSubmit}
                    />
                </>
            )}
        </>
    );
};

export default Car;
