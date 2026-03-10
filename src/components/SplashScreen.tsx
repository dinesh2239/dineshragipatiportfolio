import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsExiting(true);
    setTimeout(onComplete, 600);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background cursor-pointer"
          onClick={handleOpen}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <BlurFade delay={0.3} duration={0.7} yOffset={16}>
              <h1 className="text-display text-foreground text-center">
                Ragipati Dinesh Naidu
              </h1>
            </BlurFade>

            <BlurFade delay={0.6} duration={0.6} yOffset={10}>
              <p className="text-body text-foreground/70 text-center">
                Business Analyst
              </p>
            </BlurFade>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
