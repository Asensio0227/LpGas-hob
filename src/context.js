import { createContext, useContext, useEffect, useState } from 'react';
import items from './data';
const AppContext = createContext();

const initialState={
    gas:[],
    sorted:[],
    featured:[],
  isLoading: true,
    isError:false,
    // filter
  type: ["all", "single", "double"],
  }
function AppProvider({ children }) {
  const [gallery, setGallery] = useState(initialState);

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let gas = { ...item.fields, images, id };
      return gas;
    })
    return tempItems;
  }

  async function getData() {
    try {
      let gas = formatData(items);
      let featured = gas.filter((lp) => lp.featured === true);
      console.log(featured);
      console.log(gas);
      setGallery({
        gas:gas,
        featured,
        sorted: gas,
        isLoading:false,
      })
    } catch (error) {
      gallery.isError = true;
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type;
    const name=target.name;
    setGallery({
      [name]:value
    });
    filterGas();
  }

  const filterGas = () => {
    let {
      gas,
      type,
    } = gallery;
    let tempGas = [...gas];

    if (type !== "all") {
      tempGas = tempGas.filter((items) => items.type === type);
    }
    setGallery({
      sorted: tempGas
    });
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
    handleChange,
  }}>
    {children}
  </AppContext.Provider>
}

export const  useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };