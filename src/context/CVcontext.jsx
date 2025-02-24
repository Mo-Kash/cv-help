import { createContext, useState } from "react";

// Create a context
export const CvContext = createContext();

// Context Provider component
export const CvProvider = ({ children }) => {
  const [cvData, setCvData] = useState({
    generalInfo: {
      name: "",
      email: "",
      phone: ""
    },
    educationalInfo: [],
    practicalExp: [],
    projects: []
  });

  return (
    <CvContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CvContext.Provider>
  );
};
