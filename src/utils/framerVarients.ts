import { Variants } from "framer-motion";

export const OgVariants: { [x: string]: Variants } = {
  CONTAINER: {
    hidden: {
      opacity: 0,
      top: 100,
      position: "relative",
      transition: { duration: 0.5 },
    },
    show: {
      opacity: 1,
      top: 0,
      position: "relative",
      transition: { duration: 0.5 },
    },
  },
  RIGHT: {
    hidden: { right: -80, position: "relative" },
    show: {
      right: 0,
      position: "relative",
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  },
  LEFT: {
    hidden: { left: -80, position: "relative" },
    show: {
      left: 0,
      position: "relative",
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  },
};
