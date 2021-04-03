import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Typekit from "react-typekit";

import Sidebar from "@/components/sidebar";
import "../styles/global.css";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const transition = {
  duration: 0.25,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.25, ...transition } },
};

const CustomApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="block flex-wrap w-full h-full md:flex">
        <div className="bg-white bg-opacity-80 flex-none w-full md:w-100">
          <Sidebar />
        </div>
        <div className="flex-1 h-full bg-background">
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <motion.div
              initial="exit"
              animate="enter"
              exit="exit"
              variants={backVariants}
              key={router.route}
              className="h-full"
            >
              <motion.div variants={backVariants} className="h-full">
                <Component {...pageProps} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Typekit kitId="zqs0gyz" />
    </>
  );
};

export default CustomApp;
