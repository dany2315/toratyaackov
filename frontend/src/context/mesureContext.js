import React, { createContext, useState ,useEffect } from 'react';

export const MesureContext = createContext();

export const MesureProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth,);
 

  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MesureContext.Provider
      value={{width}}
    >
      {children}
    </MesureContext.Provider>
  );
};
