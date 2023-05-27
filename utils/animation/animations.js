import { Variants } from "framer-motion";

const slideFromLeft = {
  visible: (i = false) => ({
    x: "0",
    opacity: 1,
    transition: {
      delay: i ? 0.5 : 0,
    },
  }),
  hidden: { x: "-10vh", opacity: 0 },
};

const slideFromRight= {
  visible: (i = false) => ({
    x: "0",
    opacity: 1,
    transition: {
      delay: i ? 0.5 : 0.6,
    },
  }),
  hidden: { x: "10vh", opacity: 0 },
};

const slideFromTop = {
  visible: { y: "0", opacity: 1 },
  hidden: { y: "10vh", opacity: 0 },
};

const slideFromBottom= {
  visible: { y: "0", opacity: 1 },
  hidden: { y: "-10vh", opacity: 0 },
};

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
    },
  },
};

const child = {
  hidden: { y: "-10vh", opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
};

export {
  slideFromLeft,
  slideFromRight,
  slideFromTop,
  slideFromBottom,
  parent,
  child,
};
