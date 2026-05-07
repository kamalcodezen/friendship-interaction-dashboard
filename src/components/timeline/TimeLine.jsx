import { useContext } from "react";
import { InstallPropsContext } from "../../context/InstallPropsContext";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { BsChatDots } from "react-icons/bs";

const TimeLine = () => {
  const { callsData } = useContext(InstallPropsContext);

  return (
    <div className="w-10/12 mx-auto py-5">
      <h2 className="text-3xl font-bold mb-3">Timeline</h2>
      {callsData.map((details) => (
        <div className="flex items-center  gap-4 p-3 bg-white shadow rounded-lg mb-4">
          <div className="text-2xl">
            {details.type === "call" ? (
              <IoCallOutline />
            ) : details.type === "text" ? (
              <BsChatDots />
            ) : details.type === "video" ? (
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
