import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, refrr }) {
  return (
    <motion.div
      drag
      dragConstraints={refrr}
      className="relative w-60 h-[20vw] rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 "
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5 className="px-3 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.filesize}
          </h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {!data.tag.isopen && (
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center rounded-b-[45px]">
            <h3 className="text-">Download Now</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
export default Card;
