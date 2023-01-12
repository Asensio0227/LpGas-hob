import { createContext, useContext, useEffect, useState } from 'react';
import items from './data';
import Client from "./contentful";
const AppContext = createContext();

const initialState={
    gas:[],
    featured:[],
  isLoading: true,
    isError:false,
    // filter
  type: ["all", "single", "double"],
  }
function AppProvider({ children }) {
  const [gallery, setGallery] = useState(initialState);


  async function getData() {
    try {
      let resp = await Client.getEntries({
        content_type: "gashobInstaller",
        order:"sys.createdAt"
      });
      let gas = formatData(resp.items);
      let featured = gas.filter((lp) => lp.featured === true);
      setGallery({
        gas:gas,
        featured,
        isLoading:false,
      })
    } catch (error) {
      gallery.isError = true;
      console.log(error);
    }
  }


  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.image.map((image) => image.fields.file.url);
      let gas = { ...item.fields, images, id };
      return gas;
    })
    return tempItems;
  }
  
  const getGas = (id) => {
    let tempGas = [...gallery.gas];
    const tossie = tempGas.find((venom) => venom.id === id);
    return tossie;
  }
  
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return <AppContext.Provider value={{
    ...gallery,
    getGas,
  }}>
    {children}
  </AppContext.Provider>
}

export const  useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };