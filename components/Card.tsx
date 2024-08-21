import React, { ReactNode } from "react";

function Card({
  children,
  width = 30,
  height = 25,
}: {
  children: ReactNode;
  width: number;
  height: number;
}) {
  return (
    <div
      className={`p-5 rounded-md shadow-md h-[${height}rem] shadow-slate-500 w-[${width}rem] flex flex-col items-center justify-center`}
    >
      {children}
    </div>
  );
}

export default Card;
