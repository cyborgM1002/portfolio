import React from "react";

type RingMakerType = {
  width?: number;
};
const RingMaker = ({
  width,
  ...props
}: RingMakerType & React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={`w-${width} h-${width} bg-[rgb(0,223,192)] rounded-full`}
      {...props}
    ></div>
  );
};

export default RingMaker;
