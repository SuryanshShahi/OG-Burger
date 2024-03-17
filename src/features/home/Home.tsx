import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./sections/HeroSection";
import Unleash from "./sections/Unleash";
import OriginalTaste from "./sections/OriginalTaste";
import WideRange from "./sections/WideRange";
import Guaranteed from "./sections/Guaranteed";
import Testimonials from "./sections/Testimonials";
import { motion } from "framer-motion";
import { OgVariants } from "@/utils/framerVarients";
const Home = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current) {
            setVisible(isIntersecting);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="space-y-24 mb-24">
      <HeroSection />
      <motion.div
        viewport={{ once: true }}
        variants={OgVariants.CONTAINER}
        whileInView="show"
        initial="hidden"
      >
        <Unleash />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        variants={OgVariants.CONTAINER}
        whileInView="show"
        initial="hidden"
      >
        <OriginalTaste />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        variants={OgVariants.CONTAINER}
        whileInView="show"
        initial="hidden"
      >
        <WideRange />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        variants={OgVariants.CONTAINER}
        whileInView="show"
        initial="hidden"
      >
        <Guaranteed />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        variants={OgVariants.CONTAINER}
        whileInView="show"
        initial="hidden"
      >
        <Testimonials />
      </motion.div>
    </div>
  );
};

export default Home;
