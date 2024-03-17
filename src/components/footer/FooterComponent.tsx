import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { SiMaildotcom } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { LogoIcon } from "..";

function FooterComponent() {
  return (
    <div className="w-full py-5">
      <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-400" />
      <div className="sm:flex px-10 sm:items-center sm:justify-between">
        <LogoIcon />
        <div className="flex flex-wrap items-center text-lg font-medium text-gray-600">
          <a
            href="https://github.com/cyborgM1002"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            <ImGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manish-kumar-2b4924200/"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            <ImLinkedin />
          </a>
          <a
            href="https://echobuggm@gmail.com"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            <SiMaildotcom />
          </a>
          <a
            href="https://wa.me/9058314973"
            target="_blank"
            className="hover:underline"
          >
            <ImWhatsapp />
          </a>
        </div>
      </div>
      <hr className="my-6 w-11/12 border-gray-200 sm:mx-auto dark:border-gray-300" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="/" className="hover:underline">
          BUGG™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
}

export default FooterComponent;
