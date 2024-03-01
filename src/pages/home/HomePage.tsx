/* eslint-disable @typescript-eslint/no-explicit-any */
import Wallpaper1 from "/icons/Wallpaper1.svg";
import { Notify, ReturnProperty } from "../../utils/utils";
import Bubbles from "../../components/bubble-maker/Bubbles";
import { useEffect, useState } from "react";
import { IntroType } from "../../types/types";
import { GITHUB_API_URL, USER_SUMMARY } from "../../env";
import ImageCard from "../../components/img-card/ImageCard";
const HomePage = () => {
  const [intro, setIntro] = useState<IntroType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserSummary();
  }, []);

  async function getUserSummary() {
    try {
      setLoading(true);
      const data = await fetch(GITHUB_API_URL);
      const response = await data.json();

      if (response) {
        setIntro({
          bio: response?.bio,
          summary: USER_SUMMARY,
          name: response?.name,
        });
        setTimeout(() => {
          setLoading(false);
          Notify({ type: "success", message: "Summary fetched" });
        }, 1500);
      } else {
        Notify({ type: "error", message: "Summary not found!" });
        setLoading(true);
      }
    } catch (error: any) {
      setLoading(true);
      Notify({ type: "error", message: error?.message });
    } finally {
      Notify({ type: "loading", message: "loading..." });
    }
  }


  return (
    <div className="w-full h-screen flex justify-center items-center gap-3 relative">
      <div className="w-full h-screen flex blur-sm absolute">
        <Bubbles />
      </div>
      <div className="w-full h-screen px-5 z-0 flex justify-center items-center gap-5">
        <div
          className={`
            ${ReturnProperty({
            condition: loading,
            trueValue: "w-full",
            falseValue: "w-2/5",
          })} duration-500 flex flex-col justify-center items-center gap-10`}
        >
          <img
            className={`flex justify-center duration-500 items-center border-[10px] border-[rgb(1,134,115,0.6)] rounded-full ${ReturnProperty(
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
            {ReturnProperty({
              condition: loading,
              trueValue: "Connecting to DB...",
              falseValue: "Connected to DB...",
            })}
          </div>
        </div>
        <div
          className={`${ReturnProperty({
            condition: loading,
            trueValue: "hidden",
            falseValue: "w-3/5 h-screen",
          })} duration-500 p-10 flex items-center justify-center flex-col gap-5 relative`}
        >
          <ImageCard bio={intro?.bio} name={intro?.name} summary={intro?.summary} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
