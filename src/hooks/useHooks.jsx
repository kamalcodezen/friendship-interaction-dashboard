import { useEffect, useState } from "react";

const useHooks = () => {
  const [allFriends, setAllFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const friendsDataFetch = async () => {
      const res = await fetch("/friendsData.json");
      const data = await res.json();
      setTimeout(() => {
        setAllFriends(data);
        setLoading(false);
      }, 1000);
    };
    friendsDataFetch();
  }, []);

  return { allFriends,loading };
};

export default useHooks;
