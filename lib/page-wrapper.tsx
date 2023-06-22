"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
        className={classNames("min-h-screenHeightWithoutHeader", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
