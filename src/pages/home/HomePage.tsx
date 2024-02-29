/* eslint-disable @typescript-eslint/no-explicit-any */
import Wallpaper1 from "/icons/Wallpaper1.svg";
import { ReturnCss } from "../../utils/utils";
import Bubbles from "../../components/bubble-maker/Bubbles";
import useUserSummary from "../../api/getUserSummary";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const { loading, intro, setLoading } = useUserSummary();
  const location = useLocation();
  useEffect(() => {
    window.onload = function () {
      setLoading(true);
      // setIntro({ bio: "", summary: "", name: "" });
    };
  }, [location.pathname]);

  return (
    <div className="w-full h-screen flex justify-center items-center gap-3 relative">
      <div className="w-full h-screen flex  absolute">
        <Bubbles />
      </div>
      <div className="w-full px-5 z-0 flex justify-center items-center gap-5">
        <div
          className={`${
            loading ? "w-full" : "w-2/5"
          } duration-500 flex flex-col justify-center items-center gap-10`}
        >
          <img
            className={`flex justify-center duration-500 items-center border-[10px] border-[rgb(1,134,115,0.6)] rounded-full ${ReturnCss(
              {
                condition: loading,
                trueValue: "w-1/4 h-1/4",
                falseValue: "w-3/5 h-3/5",
              }
            )} `}
            src={Wallpaper1}
            alt="Yoga Image"
          />
          <div className="text-3xl subpixel-antialiased text-gray-700">
            {ReturnCss({
              condition: loading,
              trueValue: "Connecting to DB...",
              falseValue: "Connected to DB...",
            })}
          </div>
        </div>
        <div
          className={`${ReturnCss({
            condition: loading,
            trueValue: "hidden",
            falseValue: "w-3/5 h-1/2",
          })} duration-500 text-xl subpixel-antialiased text-gray-700 p-10`}
        >
          {intro?.bio}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
