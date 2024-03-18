import React, { useEffect, useState } from "react";
import './styles.css';

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products])
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading Data. Please Wait...</div>
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length ? (
          products.map((item, index) => ( // added index parameter for unique keys
            <div className="product" key={index}> {/* added key prop */}
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
        ) : null}
      </div>
      <div button-container>
        <button onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
}
