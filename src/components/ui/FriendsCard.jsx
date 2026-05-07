import { Link } from "react-router";

const FriendsCard = ({ friends }) => {
  const { id, name, picture, days_since_contact, status, tags } = friends;

  return (
    <>
      <Link to={`/friendsDetails/${id}`}>
        <div className="flex flex-col items-center justify-center bg-white  py-6 rounded-lg text-center space-y-2">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={picture}
              alt={name}
            />
          </div>

          <span className="font-bold text-xl  text-black text-center">
            {name}
          </span>
          <p className="font-semibold text-gray-400 text-center">
            {days_since_contact}d ago
          </p>

          <div className="flex gap-3">
            {tags.map((tag, ind) => (
              <p
                key={ind}
                className="font-semibold text-gray-600 text-center text-sm bg-green-200 px-3 rounded-2xl py-[1px]"
              >
                {tag}
              </p>
            ))}
          </div>
          <p
            className={`font-semibold text-white text-center text-sm  px-3 rounded-2xl py-[1px] ${status === "overdue" ? "bg-red-500" : status === "almost due" ? "bg-amber-500" : "bg-green-700"}`}
          >
            {status}
          </p>
        </div>
      </Link>
    </>
  );
};

export default FriendsCard;
