import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from '../../firebaseConfig';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
    

        const ref = categoryId
            ? query(collectionProd, where('category', '==', categoryId))
            : collectionProd;

        getDocs(ref).then((response) => {
            const products = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            setProducts(products);
        });
    }, [categoryId]);

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList items={products} />
        </div>
    );
};

export default ItemListContainer;
