import { useContext } from "react";
import { InstallPropsContext } from "../../context/InstallPropsContext";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { BsChatDots } from "react-icons/bs";
import { useNavigate } from "react-router";
import { BiArrowBack } from "react-icons/bi";
import useHooks from "../../hooks/useHooks";
import Loader from "../loader/Loader";

const TimeLine = () => {
  const { callsData } = useContext(InstallPropsContext);
  const { loading } = useHooks();
  const navigate = useNavigate();

  //   timeline button a click korle loading hobe tarpor data dekhabe
  if (loading) {
    return <Loader />;
  }

  //   back button ata ager page a niye jabe
  if (callsData.length === 0) {
    return (
      <div className="w-10/12 mx-auto py-10">
        <button onClick={() => navigate(-1)} className="btn mb-5 bg-slate-100">
          <BiArrowBack /> Back
        </button>

        <h2 className="text-3xl font-bold mb-5">Timeline</h2>

        <div className="flex flex-col items-center justify-center  rounded-lg shadow py-16 mt-10">
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
    <div className="w-10/12 mx-auto py-5">
      <button onClick={() => navigate(-1)} className="btn bg-slate-100">
        <BiArrowBack /> Back
      </button>

      <h2 className="text-3xl font-bold mb-3">Timeline</h2>

      {callsData.map((details) => (
        <div
          key={details.id}
          className="flex items-center  gap-4 p-3 px-5 bg-white shadow rounded-lg mb-4"
        >
          <div className="text-2xl">
            {details.type === "Call" ? (
              <IoCallOutline />
            ) : details.type === "Text" ? (
              <BsChatDots />
            ) : details.type === "Video" ? (
              <HiOutlineVideoCamera />
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="mb-1">
              <span className="font-bold text-xl">{details.type} </span>
              <span className=" text-gray-500 font-semibold">
                {`with ${details.name}`}
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
