import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// users/:id
// UsersPage

// products/:id
// ProductPage

function ProductsDetails() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    setLoading(true);
    axios({
      url: ` http://localhost:3000/candidates${params.products_id}`,
      method: "GET"
    })
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params.products_id]);

  return (
    <div>
      <a>
        <div>Hello</div>
      </a>
      {loading && <div>Loading</div>}
      <div style={{ marginBottom: "1rem" }}>
        <img src={data?.avatar} alt="icon" width="50px" />
        <div>Name: {data?.name}</div>
        <div>Name: {data?.company_name}</div>
       
      </div>
      {/* {data?.data.map((item) => (
        
      ))} */}
    </div>
  );
}

export default ProductsDetails
