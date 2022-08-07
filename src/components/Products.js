import React from 'react';
import { useState, useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';

import { fetchProducts } from '../Store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
   // const { data: products, status } = useSelector((state) => state.product);
    const [products, setProducts] = useState([]);

    useEffect(() => {
       
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);

    //here we are dispatching teh action from here to the cartslice at add function 
    const handleAdd = (product) => {
        //dispatch is hook
        dispatch(add(product));
    };

    // if (status === STATUSES.LOADING) {
    //     return <h2>Loading....</h2>;
    // }

    // if (status === STATUSES.ERROR) {
    //     return <h2>Something went wrong!</h2>;
    // }
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;