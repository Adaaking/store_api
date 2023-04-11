import * as type from "../types";

const initialState = {
  products: [],
  categories : JSON.parse(localStorage.getItem('category')),
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

      case type.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case type.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        loading: false,
        success: true,
      };

    case type.GET_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
      };





      case type.GET_BY_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case type.GET_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
        success: true,
      };
    case type.GET_BY_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}
