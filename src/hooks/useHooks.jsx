import { useEffect, useState } from "react";

const useHooks = () => {
  const [allFriends, setAllFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friendsData.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setAllFriends(data);
          setLoading(false);
        }, 1000);
      });
  }, []);

  return { allFriends, loading };
};

export default useHooks;
