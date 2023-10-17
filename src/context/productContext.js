import axios from "axios";
import React, { useContext, useReducer } from "react";

export const productsContext = React.createContext();
// const API = "http://35.198.134.123/api/v1";
// const API = "http://35.198.134.123/api/v1";
const API = "http://35.234.115.220/api/v1";
const APARTMENT_ENDPOINT = "apartment/";
// const APARTMENT_IMAGE = "apartment/image/";

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

  // const createCategory = async (category) => {
  //   try {
  //     await axios.post(`${API}/apartment/category/`, category);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getCategories = async () => {
    try {
      const { data } = await axios(`${API}/apartment/category/`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryByName = async (name) => {
    try {
      const { data } = await axios(`${API}/apartment/category/${name}`);
      dispatch({
        type: "GET_CATEGORY",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(getCategories);

  // const createProductImage = async (image) => {
  //   try {
  //     await axios.post(`${API}/${APARTMENT_IMAGE}`, image);
  //     console.log(image);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const createProduct = async (product) => {
    try {
      await axios.post(`${API}/${APARTMENT_ENDPOINT}`, product);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(createProduct);
  // console.log(createProductImage);

  const getProducts = async (search, category, _page) => {
    try {
      const params = {
        search,
        ordering: "your_ordering_field",
        ...(category ? { category } : {}),
        ...(_page ? { page: _page } : {}),
      };

      const { data, headers } = await axios.get(`${API}/${APARTMENT_ENDPOINT}`);
      console.log(data);
      dispatch({
        type: "GET_PRODUCTS",
        payload: { data: data.results, total: headers["x-total-count"] },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id) => {
    try {
      const { data } = await axios(`${API}/apartment/${id}`);
      dispatch({
        type: "GET_PRODUCT",
        payload: data,
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
        // createCategory,
        createProduct,
        // createProductImage,
        getProducts,
        getCategories,
        getCategoryByName,
        getProductById,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
