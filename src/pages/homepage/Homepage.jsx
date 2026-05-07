import AllFriends from "../../components/homepage/allFriends/AllFriends";
import Banner from "../../components/homepage/banner/Banner";
import Loader from "../../components/loader/Loader";
import useHooks from "../../hooks/useHooks";

const Homepage = () => {
  const { loading } = useHooks();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Banner />
          <AllFriends />
        </div>
      )}
    </>
  );
};

export default Homepage;
