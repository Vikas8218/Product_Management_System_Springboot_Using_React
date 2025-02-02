import React, { useEffect, useState } from "react";
import productService from "../Service/product service";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();
    productService
      .editProduct(product)
      .then((res) => {
        setMsg("✅ Product Updated Successfully!");
        setTimeout(() => navigate("/home"), 2000); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg rounded">
              <div
                className="card-header fs-3 text-center text-white"
                style={{ backgroundColor: "#fd7e14" }} 
              >
                ✏️ Edit Product
              </div>

              {msg && <p className="fs-5 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={ProductUpdate}>
                  <div className="mb-3">
                    <label className="fw-semibold">Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control border border-warning"
                      onChange={handleChange}
                      value={product.productName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="fw-semibold">Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control border border-primary"
                      onChange={handleChange}
                      value={product.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="fw-semibold">Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control border border-danger"
                      onChange={handleChange}
                      value={product.price}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="fw-semibold">Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control border border-success"
                      onChange={handleChange}
                      value={product.status}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12 fw-bold">
                    🔄 Update Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
