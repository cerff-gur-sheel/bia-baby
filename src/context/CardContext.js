import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext({
  productList: [],
  setProductList: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  updateCard: () => {},
});

export const CardProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const addProduct = (product) => {
    setProductList((prevList) => [...prevList, product]);
  };

  const removeProduct = (productId) => {
    setProductList((prevList) =>
      prevList.filter((product) => product.id !== productId)
    );
  };

  return (
    <CardContext.Provider value={{ productList, addProduct, removeProduct }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);