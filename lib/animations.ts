import { Variants } from "framer-motion";

// Respect prefers-reduced-motion
export const shouldReduceMotion = 
  typeof window !== "undefined" && 
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Common viewport config
export const defaultViewport = {
  once: true,
  amount: 0.2,
};

// Fade up animation
export const fadeUp: Variants = {
  hidden: shouldReduceMotion 
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: shouldReduceMotion 
    ? { opacity: 1 }
    : { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.1,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: shouldReduceMotion 
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
