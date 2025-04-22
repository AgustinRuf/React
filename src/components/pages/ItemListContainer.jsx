import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await new Promise(resolve => {
                setTimeout(() => {
                    const allProducts = [
                        { id: 1, name: "Producto 1", category: "category1" },
                        { id: 2, name: "Producto 2", category: "category2" },
                        { id: 3, name: "Producto 3", category: "category1" },
                        { id: 4, name: "Producto 4", category: "category2" }
                    ];
                    resolve(allProducts);
                }, 1000);
            });

            setProducts(response);
        };

        fetchData();

    }, []);

    return (
        <div>
            <h2>Catálogo</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;