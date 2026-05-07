import { useContext } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

import { InstallPropsContext } from "../../context/InstallPropsContext";

const COLORS = ["#22c55e", "#3b82f6", "#ef4444"];

const Stats = () => {
  const { callsData } = useContext(InstallPropsContext);

  const callLength = callsData.filter((item) => item.type === "Call").length;
  const textLength = callsData.filter((item) => item.type === "Text").length;
  const videoLength = callsData.filter((item) => item.type === "Video").length;

  const data = [
    {
      name: "Calls",
      value: callLength,
    },
    {
      name: "Texts",
      value: textLength,
    },
    {
      name: "Videos",
      value: videoLength,
    },
  ];

  return (
    <div className="w-10/12 mx-auto py-7">
      <h2 className="text-2xl md:text-4xl mb-6 font-bold">
        Friendship Analytics
      </h2>

      {callsData.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-700 mb-3">
            Nothing to Visualize Yet
          </h2>

          <p className="text-gray-500 text-center max-w-xl leading-relaxed">
            Start making calls, sending texts, or joining video chats to
            generate your interaction insights and communication charts.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow p-5 w-full h-[400px]">
          <h2 className="text-xl font-bold text-gray-700 mb-5">
            Interaction Analytics
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
                cornerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Stats;
