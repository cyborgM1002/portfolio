/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import userSummary from "../../api/getUserSummary";
import Wallpaper1 from "/icons/Wallpaper1.svg";

const HomePage = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);
  const totalRings = [];
  for (let i = 1; i <= 10; i++) {
    const top = Math.round(Math.random() * 90);
    const left = Math.round(Math.random() * 90);
    const width = Math.floor(Math.random() * 10 + 1);
    totalRings.push({ top, left, width });
  }

  const getUserSummary = async () => {
    try {
      const res = await userSummary();
      const { response, status, summary } = res;
      if (status === 200) {
        console.log(response);
        setSummary(summary);
        setLoading(false);
      } else {
        alert("No user summary found");
        setLoading(false);
      }
    } catch (error) {
      setLoading(true);
      console.error(error);
    } finally {
      setLoading(false);
      console.log("Summary fetched successfully");
    }
  };

  useEffect(() => {
    getUserSummary();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center gap-3 relative">
      <div className="w-full h-screen flex  absolute">
        {totalRings?.map(({ top, left, width }, index) => {
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${top}%`,
                left: `${left}%`,
              }}
              className={`w-${width} h-${width} bg-[rgb(0,223,192)] animate-pulse rounded-full`}
            ></div>
          );
        })}
      </div>
      <div className="w-full px-5 z-0 flex justify-center items-center gap-5">
        <div
          className={`${
            loading ? "w-full" : "w-2/5"
          } duration-500 flex flex-col justify-center items-center gap-10`}
        >
          <img
            className={`flex justify-center duration-500 items-center border-[10px] border-[rgb(1,134,115,0.6)] rounded-full ${
              loading ? "w-1/4 h-1/4" : "w-3/4 h-3/4"
            } `}
            src={Wallpaper1}
            alt=""
          />
          <div className="text-3xl subpixel-antialiased text-gray-700">
            {loading ? "Connecting to DB..." : "Connected to DB..."}
          </div>
        </div>
        <div
          className={`${
            loading ? "" : "w-3/5 h-4/5"
          } duration-500 p-5 flex items-center justify-center`}
        >
          <div
            className={`${
              loading ? "hidden" : "w-3/4"
            } text-2xl text-center bg-white subpixel-antialiased text-gray-700 p-10 border-2 border-[rgba(1,134,115,0.8)] rounded-xl`}
          >
            {summary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
// bg-gradient-to-r from-blue-500 via-pink-300 to-blue-500
// "rgb(1,134,115)"
