import React from "react";

function NInput({
  placeholder,
  height,
}: {
  placeholder: string;
  height: number;
}) {
  return (
    <input
      type="text"
      style={{ height: height }}
      className="border-[2px] border-slate-500 p-3 rounded-md"
      placeholder={placeholder}
    />
  );
}

export default NInput;
