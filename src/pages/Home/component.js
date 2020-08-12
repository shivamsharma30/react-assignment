import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSaga } from "../../actions/productAction";
import Grid from "@material-ui/core/Grid";
import Loader from "react-loader-spinner";
import ProductCard from "../../components/ProductCard";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productInfo);

  useEffect(() => {
    dispatch(getProductsSaga());
  }, []);

  const renderProducts = products => {
    return products.map(product => (
      <ProductCard product={product} key={product.id} />
    ));
  };

  return (
    <React.Fragment>
      <Grid className="home-page-container" container spacing={3}>
        {products.length > 0 ? (
          renderProducts(products)
        ) : (
          <Loader
            type="BallTriangle"
            color="#505e76"
            height={100}
            width={100}
            className="loader"
          />
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Home;
