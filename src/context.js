import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const initialState={
    gas:[],
    sortedGas:[],
    featuredGas:[],
    loading:true,
    // filter
    type:"all",
    breakfast:false,
  }
function AppProvider({ children }) {
  const [gallery, setGallery] = useState(initialState);

  return <AppContext.Provider value={{
    ...gallery,
  }}>
    {children}
  </AppContext.Provider>
}

export const  useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };