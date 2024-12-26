import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "こんにちは",
  "Ciao",
  "Olá",
  "안녕하세요",
  "नमस्ते",
];

interface SplashScreenProps {
  setShowSplash: (show: boolean) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  setShowSplash,
}) => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => {
        if (prevIndex < greetings.length - 1) {
          return prevIndex + 1;
        }
        return prevIndex;
      });
    }, 200);

    const timeoutId = setTimeout(() => {
      setHasShown(true);
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (hasShown) {
      setTimeout(() => {
        setShowSplash(false);
      }, 500);
    }
  }, [hasShown, setShowSplash]);

  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#180D33",
        height: "100vh",
        color: "#CCBAF7",
        fontSize: "3rem",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
      }}
      initial={{ y: 0 }}
      animate={{
        y: hasShown ? "-100vh" : 0,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      exit={{
        y: "-100vh",
        transition: { duration: 1, ease: "easeInOut" },
      }}
    >
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          zIndex: 30,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
      >
        <motion.div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: "#CCBAF7",
            marginRight: "10px",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        />
        <motion.div>{greetings[greetingIndex]}</motion.div>
      </motion.div>
    </motion.div>
  );
};
