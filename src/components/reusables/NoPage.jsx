import { motion } from "framer-motion";

export default function NoPage() {
  return (
    <div className="no-page flex justify-center items-center w-screen h-screen">
      <motion.h1
        className="head text-4xl sm:text-1xl"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
        }}
      >
        Sorry, this Page is unavailable ☹
      </motion.h1>
    </div>
  );
}
