import RingMaker from "../../utils/ring-maker/RingMaker";
import Wallpaper1 from "/icons/Wallpaper1.svg";

const HomePage = () => {
  const totalRings = [];
  for (let i = 1; i <= 40; i++) {
    const top = Math.round(Math.random() * 90);
    const left = Math.round(Math.random() * 90);
    const width = Math.round(Math.random() * 20 + 5);
    totalRings.push({ top, left, width });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center gap-3 relative">
      <div className="w-full h-screen flex -z-10 absolute">
        {totalRings?.map(({ top, left, width }, index) => {
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${top}%`,
                left: `${left}%`,
              }}
            >
              <RingMaker width={width} />
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <img
            className="w-1/3 h-1/3 flex justify-center items-center bg-[rgb(1,134,115)] p-3 rounded-full rounded-full"
            src={Wallpaper1}
            alt=""
          />
          <span className="text-2xl">Connecting to DB...</span>
        </div>{" "}
        <div className="w-1/2 p-10 hidden">
          As a dedicated MERN (MongoDB, Express.js, React.js, Node.js)
          developer, I am passionate about crafting robust and dynamic web
          applications that deliver exceptional user experiences. With a solid
          foundation in full-stack development and a keen eye for detail, I
          thrive in collaborative environments where I can leverage my expertise
          to drive innovation and achieve project success.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
// bg-gradient-to-r from-blue-500 via-pink-300 to-blue-500
// "rgb(1,134,115)"
