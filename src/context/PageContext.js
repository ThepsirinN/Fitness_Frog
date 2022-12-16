import { createContext, useContext, useState } from "react";

const PageContext = createContext();

const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState("");
  const [isChange, setIsChange] = useState(false)
  const [data, setData] = useState("");

  const setPageValue = (val) => {
    setPage(val);
  };

  const setIsChangeValue = (val) => {
    setIsChange(val);
  };

  const setDataValue = (val) => {
    setData(val);
  };
  

  return (
    <PageContext.Provider value={{ page, setPageValue, isChange, setIsChangeValue, data, setDataValue }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContextProvider };

export const MyPageContext = () => {
  return useContext(PageContext);
};
