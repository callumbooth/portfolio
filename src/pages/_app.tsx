import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import Sidebar from "@/components/sidebar";
import type { AppProps } from "next/app";
import "../styles/global.css";

type Props = AppProps & {
  Component: ReactNode;
  err: any;
};

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const transition = {
  duration: 0.25,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
  exit: { opacity: 0, transition },
  enter: { opacity: 1, transition: { delay: 0.25, ...transition } }
};

const CustomApp = ({ Component, pageProps }: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/zqs0gyz.css" />
        <title>Callum Booth | Software Engineer</title>
      </Head>
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
    </>
  );
};

export default CustomApp;
