export const ADD_PRODUCT = "basket/ADD_PRODUCT";
export const REMOVE_PRODUCT = "basket/REMOVE_PRODUCT";
export const EMPTY_BASKET = "basket/EMPTY_BASKET";

export const addProduct = (productName) => ({
  type: ADD_PRODUCT,
  payload: productName,
});

export const removeProduct = (productName) => ({
  type: REMOVE_PRODUCT,
  payload: productName,
});

export const emptyBasket = () => ({
  type: EMPTY_BASKET,
});
