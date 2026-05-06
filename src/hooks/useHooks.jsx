import { useEffect, useState } from "react";

const useHooks = () => {
  const [allFriends, setAllFriends] = useState([]);

  useEffect(() => {
    const friendsDataFetch = async () => {
      const res = await fetch("/friendsData.json");
      const data = await res.json();
      setAllFriends(data);
    };
    friendsDataFetch();
  }, []);

  return { allFriends };
};

export default useHooks;
