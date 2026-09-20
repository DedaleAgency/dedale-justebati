"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, fadeIn, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

export function FadeUp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
}

export function HeroAnimated({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
}
