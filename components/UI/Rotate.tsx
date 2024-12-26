"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  duration?: number;
  framerProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  items,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, duration);

    return () => clearInterval(interval);
  }, [items, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={items[index].title}
          className={cn("flex flex-col items-start", className)}
          {...framerProps}
        >
          <div className="flex space-x-2 items-center tracking-wider">
            {items[index].icon && <span>{items[index].icon}</span>}
            <h1 className="font-bold text-xl">{items[index].title}</h1>
          </div>
          <p className="text-gray-500 text-lg py-2 lg:text-xl">{items[index].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
