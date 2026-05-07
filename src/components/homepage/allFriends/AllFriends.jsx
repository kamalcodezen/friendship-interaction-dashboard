import useHooks from "../../../hooks/useHooks";
import Loader from "../../loader/Loader";
import FriendsCard from "../../ui/friendsCard";

const AllFriends = () => {
  const { allFriends, loading } = useHooks();

  return (
    <div className="container bg-slate-100  pb-24">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2 className="font-bold text-2xl py-4">Your Friends</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {allFriends.map((friends) => (
              <FriendsCard key={friends.id} friends={friends}></FriendsCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllFriends;
