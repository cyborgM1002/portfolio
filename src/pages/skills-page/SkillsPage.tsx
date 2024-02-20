import { useState } from "react";
import { LuServerCrash } from "react-icons/lu";

const SkillsPage = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <main className="w-full h-[80vh] flex items-center justify-center">
        <div className="flex flex-col gap-10 items-center bg-blue-600/60 rounded-md border border-gray-200 justify-center w-2/5 h-2/3">
          <span className="text-7xl">
            <LuServerCrash />
          </span>
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="text-3xl font-semibold">Oh Snap!</span>
            <span className="text-xl font-light">Page Underdevelopment!!</span>
          </div>
        </div>
      </main>
    );
  }
  return <div className="w-full h-screen">SkillPage</div>;
};

export default SkillsPage;
