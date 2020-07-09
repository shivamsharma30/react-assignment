import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSaga } from "../../actions/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productInfo);

  useEffect(() => {
    dispatch(getProductsSaga());
  }, []);

  return <div>placeHolder for Product Listing</div>;
};

export default Home;
