import { combineReducers } from "redux";
import productInfo from "./productInfo";
import cartInfo from "./cartInfo";
export default combineReducers({ productInfo, cartInfo });
