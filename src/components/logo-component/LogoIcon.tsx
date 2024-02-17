// import { PiBugFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import bug from "../../../public/bug.svg";
// PiBugDroidFill

const LogoIcon = () => {
  return (
    <div>
      <Link to={"/"} className="flex justify-start items-center gap-2">
        <button className="md:w-10 md:h-10 w-8 h-8 rounded-full">
          <img src={bug} />
        </button>
        <span className="md:text-3xl text-xl md:pt-1.5 pt-1 font-semibold">
          CODES&BUGS
        </span>
      </Link>
    </div>
  );
};

export default LogoIcon;
