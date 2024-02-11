import { Link } from "react-router-dom";

const LogoIcon = () => {
  return (
    <div>
      <Link to={"/"} className="flex justify-start items-center gap-2">
        <button className="md:pt-1.5 pt-1 md:w-12 md:h-12 w-10 h-10 rounded-full bg-g whitespace-nowrap md:text-3xl text-2xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          CB
        </button>
        <span className="md:text-3xl text-xl md:pt-1.5 pt-1 font-semibold">
          CodeBugg
        </span>
      </Link>
    </div>
  );
};

export default LogoIcon;
