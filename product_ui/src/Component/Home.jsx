import React, { useEffect, useState } from "react";
import productService from "../Service/product service";
import { Link } from "react-router-dom";

const Home = () => {
  const [ProductList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("✅ Product Deleted Successfully!");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow-lg">
              <div
                className="card-header fs-3 text-center text-white"
                style={{ backgroundColor: "#007bff" }} 
              >
                📦 All Product List
              </div>

              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <table className="table table-hover table-bordered">
                  <thead className="table-dark"> 
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ProductList.map((p, num) => (
                      <tr key={p.id}>
                        <td>{num + 1}</td>
                        <td className="text-primary">{p.productName}</td>
                        <td className="text-warning">{p.description}</td>
                        <td className="text-danger fw-bold">&#8377;{p.price}</td>
                        <td className="text-success">{p.status}</td>
                        <td>
                          <Link
                            to={`editProduct/${p.id}`}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            ✏️ Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            🗑️ Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
