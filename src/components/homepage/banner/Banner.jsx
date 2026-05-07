import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container bg-slate-100">
      <div className="flex flex-col items-center justify-center space-y-10 min-h-screen border-b border-gray-300">
        {/* banner content */}
        <div className="flex flex-col items-center justify-center space-y-3 max-w-[50%]">
          <h2 className="md:text-4xl text-2xl font-bold text-center text-gray-700">
            Friends to keep close in your life
          </h2>
          <p className="text-center text-sm text-gray-600">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="flex items-center justify-center py-1 px-2 rounded-sm gap-1 font-semibold mr-3  text-gray-200 bg-green-700 border border-green-500">
            <FaPlus />
            Add a Friend
          </button>
        </div>

        {/* banner stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center bg-white px-14 py-8 rounded-lg">
            <span className="font-bold text-2xl  text-black text-center">10</span>
            <p className="font-semibold text-gray-400 text-center">Total Friends</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white px-14 py-8 rounded-lg">
            <span className="font-bold text-2xl  text-black text-center">3</span>
            <p className="font-semibold text-gray-400 text-center">On Track</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white px-14 py-8 rounded-lg">
            <span className="font-bold text-2xl  text-black text-center">6</span>
            <p className="font-semibold text-gray-400 text-center">Need Attention</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white px-14 py-8 rounded-lg">
            <span className="font-bold text-2xl  text-black text-center">12</span>
            <p className="font-semibold text-gray-400 text-center">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
