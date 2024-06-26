import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
 

  const openMenu = () => {
    setMenu(true)
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <MenuContext.Provider
      value={{
       openMenu,
        closeMenu,
        menu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
