import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex justify-center items-center">
            <button className="mr-3 pt-1.5 w-12 h-12 rounded-full bg-g whitespace-nowrap text-3xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              CB
            </button>
            <span className="text-3xl pt-1.5 font-semibold">CodeBugg</span>{" "}
          </div>

          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="/about">About</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="/contact">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="projects">Projects</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="CodeBugg™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/cyborgM1002"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
