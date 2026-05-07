import { useState } from "react";
import { InstallPropsContext } from "./InstallPropsContext";
import toast from "react-hot-toast";

const InstallPropsProvider = ({ children }) => {
  const [callsData, setCallsData] = useState([]);

  const handleCalls = (friends, type) => {
    const newObj = {
      ...friends,
      type,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setCallsData([...callsData, newObj]);
    toast.success(`${newObj.type} with ${friends.name}`);
  };

  const data = {
    handleCalls,
    callsData,
  };

  return (
    <div>
      <InstallPropsContext.Provider value={data}>
        {children}
      </InstallPropsContext.Provider>
    </div>
  );
};

export default InstallPropsProvider;
