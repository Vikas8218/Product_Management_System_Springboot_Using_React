import React, { useState } from "react";
import ProductService from "../Service/product service";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();
    ProductService.saveProduct(product)
      .then((res) => {
        console.log("Product Added Successfully");
        setMsg("✅ Product Added Successfully!");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });
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
            <div className="card shadow-lg">
              <div
                className="card-header fs-3 text-center fw-semibold"
                style={{ backgroundColor: "#4CAF50", color: "white" }} // Green header
              >
                🛒 Add Product
              </div>

              {msg && <p className="fs-5 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={ProductRegister}>
                  <div className="mb-3">
                    <label className="fw-semibold">Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control border border-primary"
                      onChange={handleChange}
                      value={product.productName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="fw-semibold">Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control border border-warning"
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
                  <button className="btn btn-warning col-md-12 fw-bold">
                    🚀 Submit
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

export default AddProduct;
