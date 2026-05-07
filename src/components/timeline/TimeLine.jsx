import { useContext, useState } from "react";
import { InstallPropsContext } from "../../context/InstallPropsContext";

import { IoCallOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { BsChatDots } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

import { useNavigate } from "react-router";

import useHooks from "../../hooks/useHooks";
import Loader from "../loader/Loader";

const TimeLine = () => {
  const { callsData } = useContext(InstallPropsContext);

  const { loading } = useHooks();

  const navigate = useNavigate();

  const [sorting, setSorting] = useState("");

  // filtering
  const filteredData =
    sorting === "Call"
      ? callsData.filter((item) => item.type === "Call")
      : sorting === "Text"
        ? callsData.filter((item) => item.type === "Text")
        : sorting === "Video"
          ? callsData.filter((item) => item.type === "Video")
          : callsData;


  // loading
  if (loading) {
    return <Loader />;
  }

  // empty timeline
  if (callsData.length === 0) {
    return (
      <div className="w-10/12 mx-auto py-10">
        <button onClick={() => navigate(-1)} className="btn mb-5 bg-slate-100">
          <BiArrowBack />
          Back
        </button>

        <h2 className="text-3xl font-bold mb-5">Timeline</h2>

        <div className="flex flex-col items-center justify-center rounded-lg shadow py-16 mt-10 bg-white">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            No Activity Yet
          </h2>

          <p className="text-gray-500 text-center max-w-md">
            Your recent calls, texts, and video interactions will appear here
            once you start connecting with your friends.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto py-4">
      <h2 className="text-3xl font-bold mb-1">Timeline</h2>

      <div className="flex gap-4 items-center mb-5 flex-wrap">
        {/* back button */}
        <button onClick={() => navigate(-1)} className="btn bg-slate-100">
          <BiArrowBack />
          Back
        </button>

        {/* filter dropdown */}
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter Timeline ⬇️
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => setSorting("Call")}>Call Details</button>
            </li>

            <li>
              <button onClick={() => setSorting("Text")}>Text Details</button>
            </li>

            <li>
              <button onClick={() => setSorting("Video")}>Video Details</button>
            </li>

            <li>
              <button onClick={() => setSorting("")}>All Details</button>
            </li>
          </ul>
        </div>
      </div>

      {/* timeline cards */}
      {filteredData.map((details, ind) => (
        <div
          key={`${details.id}-${ind}`}
          className="flex items-center gap-4 p-4 px-5 bg-white shadow rounded-lg mb-4"
        >
          {/* icon */}
          <div className="text-2xl">
            {details.type === "Call" ? (
              <IoCallOutline />
            ) : details.type === "Text" ? (
              <BsChatDots />
            ) : details.type === "Video" ? (
              <HiOutlineVideoCamera />
            ) : null}
          </div>

          {/* content */}
          <div>
            <p className="mb-1">
              <span className="font-bold text-xl capitalize">
                {details.type}
              </span>

              <span className="text-gray-500 font-semibold">
                {` with ${details.name}`}
              </span>
            </p>

            <p className="text-sm text-gray-500 font-semibold">
              {details.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
