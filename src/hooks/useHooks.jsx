import { useEffect, useState } from "react";
import friendsData from "../data/friendsData.json";


const useHooks = () => {
  const [allFriends, setAllFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAllFriends(friendsData);
      setLoading(false);
    }, 500);
  }, []);

  // console.log(allFriends)
  return { allFriends, loading };
};

export default useHooks;
