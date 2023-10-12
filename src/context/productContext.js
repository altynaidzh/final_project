import axios from "axios";
import React, { useContext, useReducer } from "react";

export const productsContext = React.createContext();
const API = "http://35.198.109.24/api/v1";
const APARTMENT_ENDPOINT = "apartment/";

export const useProducts = () => {
  return useContext(productsContext);
};

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  category: null,
  oneProduct: null,
};
const LIMIT = 3;

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.total / LIMIT),
      };
    case "GET_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCategories = async () => {
    try {
      const res = await axios(`${API}/apartment/category/`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const createProduct = async (product) => {
  //   try {
  //     await axios.post(`${API}${APARTMENT_ENDPOINT}`, product);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getProducts = async (search, category, _page) => {
    try {
      const params = {
        search,
        ordering: "your_ordering_field",
        ...(category ? { category } : {}),
        ...(_page ? { page: _page } : {}),
      };

      const { data, headers } = await axios.get(
        `http://35.198.109.24/api/v1/${APARTMENT_ENDPOINT}`
      );

      dispatch({
        type: "GET_PRODUCTS",
        payload: { data, total: headers["x-total-count"] },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        oneProduct: state.oneProduct,
        category: state.category,
        // createProduct,
        getProducts,
        getCategories,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
