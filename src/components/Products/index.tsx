// import styles from './Contact.module.scss';

const ProductItem = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#5753c9" />
          {/*<text x="50%" y="50%" fill="#eceeef" dy=".3em">*/}
          {/*  Thumbnail*/}
          {/*</text>*/}
        </svg>
        <div className="card-body">
          <h5 className="card-title">Coming soon...</h5>
          <p className="card-text">Description</p>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary me-3"
            disabled
          >
            Demo
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            disabled
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export function Products() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Products</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
