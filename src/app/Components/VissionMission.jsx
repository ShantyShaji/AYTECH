// components/VisionMission.jsx
import React from "react";
import Image from "next/image"; // Importing Image from Next.js for optimized image loading
const VisionMission = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-gray-100 p-8 py-10">
      {/* Vision Box */}
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4">
          {/* <Telescope /> */}
          {/* or use: <img src="/path-to-telescope.svg" alt="Telescope Icon" /> */}
          <Image
            src="/Telescope.png"
            alt="Telescope Icon"
            width={250}
            height={250}>
          </Image>
        </div>
        <h2 className="text-blue-800 font-bold text-xl mb-2">Vision</h2>
        <p className="text-gray-700">
          Reengineer your business to attain better quality, higher profitability and faster time to market.
        </p>
      </div>

      {/* Divider (for large screens) */}
      <div className="hidden lg:block border-l h-32 border-gray-300"></div>

      {/* Mission Box */}
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4">
          {/* <PaperPlane /> */}
          {/* or use: <img src="/path-to-paperplane.svg" alt="Paper Plane Icon" /> */}

          <Image
            src="/Paper.png"
            alt="paper plane Icon"
            width={250}
            height={250}>
          </Image>
        </div>
        <h2 className="text-blue-800 font-bold text-xl mb-2">Mission</h2>
        <p className="text-gray-700">
          Moulding your future through cutting edge technologies utilising our expertise.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
