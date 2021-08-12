import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
      const url = "/api/v1/products/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ products: response }))
        .catch(() => this.props.history.push("/"));
  }
   render() {
    const { products } = this.state;
    const allProducts = products.map((product, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={product.img}
            className="card-img-top"
            alt={`${product.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6>{product.price}</h6>
            <Link to={`/product/${product.id}`} className="btn custom-button">
              View Product
            </Link>
          </div>
        </div>
      </div>
    ));
    const noProduct = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No products available. Why not <Link to="/new_product">Add One</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4"> Store Products</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular recipes, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/product" className="btn custom-button">
                Add New Product
              </Link>
            </div>
            <div className="row">
              {products.length > 0 ? allProducts : noProduct}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}



export default Products;