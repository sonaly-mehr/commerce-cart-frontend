import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstant"

export const listProduct = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try {
        const {data} = await axios.get('http://localhost:4000/api/product/list');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data});
        
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}