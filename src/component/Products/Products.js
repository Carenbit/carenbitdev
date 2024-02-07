import "./Products.css";
import placeHolderImage from "../../assets/placeholder.png";

const Products = () => {
  return (
    <div>
      <h1 className="text-center">Our Products</h1>
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-column p-3 productCard align-items-center">
          <img src={placeHolderImage} alt="..." className="placeHolderImage" />
          <h3>Product name</h3>
          <p className="fw-light text-center">
            Lörem ipsum susanne Jonasson Anette Nilsson medan Axel Ahmed Adam
            Jönsson. Charlotta Ek Alice Arvidsson i David{" "}
          </p>
        </div>
        <div className="d-flex flex-column p-3 productCard align-items-center">
          <img src={placeHolderImage} alt="..." className="placeHolderImage" />
          <h4>Product name</h4>
          <p className="fw-light text-center">
            Lörem ipsum susanne Jonasson Anette Nilsson medan Axel Ahmed Adam
            Jönsson. Charlotta Ek Alice Arvidsson i David{" "}
          </p>
        </div>
        <div className="d-flex flex-column p-3 productCard align-items-center">
          <img src={placeHolderImage} alt="..." className="placeHolderImage" />
          <h4>Product name</h4>
          <p className="fw-light text-center">
            Lörem ipsum susanne Jonasson Anette Nilsson medan Axel Ahmed Adam
            Jönsson. Charlotta Ek Alice Arvidsson i David{" "}
          </p>
        </div>
        <div className="d-flex flex-column p-3 productCard align-items-center">
          <img src={placeHolderImage} alt="..." className="placeHolderImage " />
          <h4>Product name</h4>
          <p className="fw-light text-center">
            Lörem ipsum susanne Jonasson Anette Nilsson medan Axel Ahmed Adam
            Jönsson. Charlotta Ek Alice Arvidsson i David{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
