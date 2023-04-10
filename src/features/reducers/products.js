import * as type from "../types";

const initialState = {
  products: [],
  search_by_category : [],
  loading: false,
  success: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
        success: true,
      };
    case type.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
      };

    case type.FILTER_BY_CATEGORY:
      console.log("actoio",action.payload)
      return {
        products : state.products.filter(product => product.category === action.payload)
      };
    default:
      return state;
  }
}
