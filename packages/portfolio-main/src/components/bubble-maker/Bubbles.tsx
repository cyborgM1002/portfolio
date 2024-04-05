import React from "react";

const Bubbles = () => {
  const totalRings = [];
  const iterator = 40;
  for (let i = 1; i <= iterator; i++) {
    const top = Math.round(Math.random() * 90);
    const left = Math.round(Math.random() * 90);
    const width = Math.floor(Math.random() * 10 + 1);
    totalRings.push({ top, left, width });
  }
  return (
    <>
      {totalRings?.map(({ top, left, width }, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${top}%`,
            left: `${left}%`,
          }}
          className={`w-${width} h-${width} bg-brand animate-pulse rounded-full`}
        />
      ))}
    </>
  );
};

export default Bubbles;
