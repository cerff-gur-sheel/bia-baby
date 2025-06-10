import React, { createContext, useContext, useState } from 'react';

export const screens = Object.freeze({
  home: 'home',
  auth: 'auth',
  catalog: 'catalog',
  product: 'product',
});

const NavigationContext = createContext({
  screen: screens.home,
  setScreen: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [screen, setScreen] = useState(screens.home);

  return (
    <NavigationContext.Provider value={{ screen, setScreen }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
