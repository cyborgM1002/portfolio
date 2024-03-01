import { IntroType } from "../../types/types";
import profile from "/images/profile.jpeg"
import { GITHUB_URL } from "../../env";

function ImageCard({ bio, name, summary }: IntroType) {
    return (
        <div className="relative h-4/5 w-4/5 rounded-md">
            <img
                src={profile}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {bio}
                </p>
                <p className="mt-2 text-xs text-gray-400">
                    {summary}
                </p>
                <a href={GITHUB_URL} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View GitHub Profile &rarr;
                </a>
            </div>
        </div>
    )
}

export default ImageCard;