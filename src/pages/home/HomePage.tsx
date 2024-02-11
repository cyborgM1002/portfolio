import homePage from "../../assets/images/homepage/homePage.jpg";
const HomePage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <img
        className="absolute object-cover w-full h-screen z-0 opacity-75"
        src={homePage}
        alt=""
      />
      <div className="absolute object-cover w-full h-screen z-1 blur-sm"></div>
      <div className="w-3/5 h-3/5 flex items-start gap-3 border border-gray-300 rounded bg-white z-10">
        <div className="w-1/3">
          <img
            className="w-40 h-40 rounded-full object-cover"
            src={homePage}
            alt=""
          />
        </div>
        <div className="w-2/3">Description</div>
      </div>
    </div>
  );
};

export default HomePage;
// bg-gradient-to-r from-blue-500 via-pink-300 to-blue-500
