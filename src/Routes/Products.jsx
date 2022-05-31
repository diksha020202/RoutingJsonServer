import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({
      url: "http://localhost:3000/candidates",
      method: "GET"
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {loading && <div>Loading</div>}

      {data?.map((item) => (
        <div style={{ marginBottom: "1rem" }} key={item.id}>
          <div>Product Name: {item.name}</div>
          <div>Brand Name: {item.company_name}</div>
          <div>rating:{item.rating}</div>
          <Link to={`/products/${item.id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
