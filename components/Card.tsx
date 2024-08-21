import React, { ReactNode } from "react";

function Card({
  children,
  width,
  height,
}: {
  children: ReactNode;
  width: number;
  height: number;
}) {
  return (
    <div
      className={`p-5 rounded-md shadow-sm shadow-slate-500 flex flex-col hover:shadow-md hover:shadow-slate-500 transition-all duration-300`}
      style={{ maxWidth: `${width}rem`, maxHeight: `${height}rem` }}
    >
      {children}
    </div>
  );
}

export default Card;
