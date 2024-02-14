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
        <div className="w-2/3">
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
