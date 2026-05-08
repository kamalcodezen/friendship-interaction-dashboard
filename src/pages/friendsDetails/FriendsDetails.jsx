import { useNavigate, useParams } from "react-router";
import useHooks from "../../hooks/useHooks";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { MdArchive } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import Loader from "../../components/loader/Loader";
import { LuPhoneCall } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { useContext } from "react";
import { InstallPropsContext } from "../../context/InstallPropsContext";
import { BiArrowBack } from "react-icons/bi";

const FriendsDetails = () => {
  const friends = useParams();
  const { allFriends } = useHooks();
  const { handleCalls } = useContext(InstallPropsContext);
  const navigate = useNavigate();
  // if (loading) {
  //   return <Loader/>
  // }

  const myFriends = allFriends.find((fr) => fr.id === Number(friends.id));

  if (!myFriends) {
    return <Loader />;
  }

  const { name, picture, days_since_contact, status, tags, bio, email, goal } =
    myFriends;

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-4">
      <button onClick={() => navigate(-1)} className="btn bg-slate-100">
        <BiArrowBack /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* left */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <div className="flex flex-col items-center justify-center bg-white px-14 py-8 rounded-lg text-center space-y-2 shadow">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={picture}
                alt={name}
              />
            </div>

            <span className="font-bold text-xl text-black text-center">
              {name}
            </span>

            <p
              className={`font-semibold text-white text-center text-sm px-3 rounded-2xl py-[1px]
          ${
            status === "overdue"
              ? "bg-red-500"
              : status === "almost due"
                ? "bg-amber-500"
                : "bg-green-700"
          }`}
            >
              {status}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {tags.map((tag, ind) => (
                <p
                  key={ind}
                  className="font-semibold text-gray-600 text-center text-sm bg-green-200 px-3 rounded-2xl py-[1px]"
                >
                  {tag}
                </p>
              ))}
            </div>

            <p className="group relative text-gray-500 font-semibold italic cursor-pointer">
              {bio.slice(0, 22)}...
              <span className="absolute hidden group-hover:block bg-black text-white text-sm p-2 rounded-md w-64 z-10 left-0 top-8">
                {bio}
              </span>
            </p>

            <p className="font-semibold text-gray-500">{email}</p>
          </div>

          <div className="flex gap-3 shadow items-center bg-white justify-center font-semibold py-2 cursor-pointer rounded-lg">
            <HiOutlineBellSnooze />
            <p>Snooze 2 weeks</p>
          </div>

          <div className="flex gap-3 shadow items-center bg-white justify-center font-semibold py-2 cursor-pointer rounded-lg">
            <MdArchive />
            <p>Archive</p>
          </div>

          <div className="flex gap-3 shadow items-center bg-white justify-center font-semibold py-2 cursor-pointer rounded-lg">
            <span className="text-red-500 flex items-center gap-2">
              <AiTwotoneDelete />
              Delete
            </span>
          </div>
        </div>

        {/* right */}
        <div className="md:col-span-8 flex flex-col gap-5 rounded-lg">
          {/* 1st card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center bg-white py-8 rounded-lg shadow">
              <span className="font-bold text-2xl text-black text-center">
                {days_since_contact}
              </span>

              <p className="font-semibold text-gray-400 text-center">
                Days Since Contact
              </p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white py-8 rounded-lg shadow">
              <span className="font-bold text-2xl text-black text-center">
                {goal}
              </span>

              <p className="font-semibold text-gray-400 text-center">
                Goal (Days)
              </p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white py-8 rounded-lg shadow">
              <span className="font-bold text-2xl text-black text-center">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              <p className="font-semibold text-gray-400 text-center">
                Next Due
              </p>
            </div>
          </div>

          {/* 2nd card */}
          <div className="bg-white py-9 px-4 shadow rounded-lg">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-500">Relationship Goal</p>

              <button className="btn cursor-pointer">Edit</button>
            </div>

            <div>
              <p className="text-gray-500">
                Connect every{" "}
                <span className="font-bold text-gray-600 text-xl">
                  {goal} days
                </span>
              </p>
            </div>
          </div>

          {/* 3rd card */}
          <div className="bg-white rounded-lg shadow p-4">
            <p className="font-semibold text-gray-500 mb-4">Quick Check-In</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div
                onClick={() => handleCalls(myFriends, "Call")}
                className="flex flex-col items-center justify-center gap-2 p-5 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition"
              >
                <LuPhoneCall />
                <p className="text-gray-500">Call</p>
              </div>

              <div
                onClick={() => handleCalls(myFriends, "Text")}
                className="flex flex-col items-center justify-center gap-2 p-5 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition"
              >
                <BsChatLeftText />

                <p className="text-gray-500">Text</p>
              </div>

              <div
                onClick={() => handleCalls(myFriends, "Video")}
                className="flex flex-col items-center justify-center gap-2 p-5 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition"
              >
                <IoVideocamOutline />

                <p className="text-gray-500">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
