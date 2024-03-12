import React from "react";

export default function background() {
  return (
    <div className=" fixed z-[2] bg-slate-800 w-full h-screen">
      <div className="absolute w-full Docum py-10 flex justify-center text-zinc-600 text-xl font-semibold">
        Documnt
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-medium text-[10vw] text-slate-950 tracking-tighter">
        Docs
      </h1>
    </div>
  );
}
