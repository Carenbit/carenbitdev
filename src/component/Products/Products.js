import "./Products.css";
import productImg1 from "../../assets/ProductImg1.png";
import productImg2 from "../../assets/ProductImg2.png";
import productImg3 from "../../assets/ProductImg3.png";
import productImg4 from "../../assets/ProductImg4.png";

const Products = () => {
  return (
    <div>
      <h1 className="text-center pHeading">Our Products</h1>
      <div className="d-flex flex-wrap pContainer">
        <div className="d-flex flex-column p-3 productCard align-items-center">
          <img src={productImg1} alt="..." className="placeHolderImage" />
          <h4 className="pNames">Streamline</h4>
          <p className="fw-light text-center fs-6">
            Lörem ipsum susanne Jonasson Anette Nilsson medan Axel Ahmed Adam
            Jönsson. Charlotta Ek Alice Arvidsson i David{" "}
          </p>
        </div>
        <div className="d-flex flex-column p-3 productCard align-items-center">
          <img src={productImg2} alt="..." className="placeHolderImage" />
          <h4 className="pNames">Automate Workflows</h4>
          <p className="fw-light text-center fs-6">
            Lörem ipsum susanne Jonasson Anette Nilsson medan Axel Ahmed Adam
            Jönsson. Charlotta Ek Alice Arvidsson i David{" "}
          </p>
        </div>
        <div className="d-flex flex-column p-3 productCard align-items-center">
          <img src={productImg3} alt="..." className="placeHolderImage" />
          <h4 className="pNames">Product name</h4>
          <p className="fw-light text-center fs-6">
            Lörem ipsum susanne Jonasson Anette Nilsson medan Axel Ahmed Adam
            Jönsson. Charlotta Ek Alice Arvidsson i David{" "}
          </p>
        </div>
        <div className="d-flex flex-column p-3 productCard align-items-center">
          <img src={productImg4} alt="..." className="placeHolderImage " />
          <h4 className="pNames">Product name</h4>
          <p className="fw-light text-center fs-6">
            Lörem ipsum susanne Jonasson Anette Nilsson medan Axel Ahmed Adam
            Jönsson. Charlotta Ek Alice Arvidsson i David{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
