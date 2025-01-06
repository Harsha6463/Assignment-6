import React, { useState, useEffect, useMemo } from "react";

const Q8 = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [id]);

  const productsData = useMemo(() => data, [data]);
  return (
  <div>
    <div className="products">
      <h1>Data Fetching from API</h1>
      <div >
        <label>Product Id : </label>
        <input value={id} onChange={(e) => setId(e.target.value)} />
      </div>

      <div>
        {productsData ? (
          <pre>{JSON.stringify(productsData, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>

   
    </div>
    <hr></hr>
    </div>
  );
};

export default Q8;
