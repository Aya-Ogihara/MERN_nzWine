import React from 'react';

export const AppContext = React.createContext();

const AppProvider = (props) => {
  const number = '0';
  return (
    <AppContext.Provider
      value={{
        number,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
