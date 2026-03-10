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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-foreground cursor-pointer"
          onClick={handleOpen}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <BlurFade delay={0.1} duration={0.6} yOffset={12}>
              <p className="text-label uppercase tracking-[0.2em] text-muted-foreground/60">
                Portfolio
              </p>
            </BlurFade>

            <BlurFade delay={0.3} duration={0.7} yOffset={16}>
              <h1 className="text-display text-background text-center">
                RDN
              </h1>
            </BlurFade>

            <BlurFade delay={0.6} duration={0.6} yOffset={10}>
              <p className="text-body text-background/50 text-center max-w-md">
                Business Analyst · Analytical Systems Designer
              </p>
            </BlurFade>

            <BlurFade delay={1.2} duration={0.5} yOffset={8}>
              <div className="mt-8 flex flex-col items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen();
                  }}
                  className="px-8 py-3 border border-background/20 text-background/80 text-small tracking-widest uppercase hover:bg-background/10 transition-colors duration-300"
                >
                  Enter Portfolio
                </button>
                <p className="text-background/30 text-label animate-pulse">
                  or click anywhere to open
                </p>
              </div>
            </BlurFade>
          </div>

          {/* Subtle progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-background/20"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
