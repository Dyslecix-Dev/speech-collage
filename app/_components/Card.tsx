import { motion } from "motion/react";

export default function Card({ imgSrc, title, description }: { imgSrc: string; title: string; description: string }) {
  return (
    <motion.div whileHover="hover" className="w-full h-[300px] relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <p className="text-sm font-light text-slate-300">{description}</p>
      </div>

      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-violet-700 transition-colors duration-300">
        <h3 className="px-4 text-xl text-center mb-2 font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}
