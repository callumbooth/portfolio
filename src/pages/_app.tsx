import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Sidebar from "@/components/sidebar";
import "@/root/configuration/fontawesome";
import "../styles.scss";

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
    <div className="wrapper">
      <div className="content-left">
        <Sidebar />
      </div>
      <div className="content-right">
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            variants={backVariants}
            key={router.route}
          >
            <motion.div variants={backVariants}>
              <Component {...pageProps} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomApp;
