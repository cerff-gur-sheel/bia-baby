import React, { createContext, useContext, useState } from 'react';

export const screens = Object.freeze({
  home: 'home',
  auth: 'auth',
  catalog: 'catalog',
  product: 'product',
  cart: 'cart',
  account: 'account'
});

const NavigationContext = createContext({
  screen: screens.home,
  setScreen: () => {},
  props: () => {},
  setProps: () => {},
});

export const NavigationProvider = ({children}) => {
  const [screen, setScreen] = useState(screens.home);
  const [props, setProps] = useState({});

  return (
    <NavigationContext.Provider value={{ screen, setScreen, props, setProps }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
