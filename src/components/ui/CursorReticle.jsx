import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorReticle() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    // Passive listener for performance
    window.addEventListener("mousemove", move, { passive: true });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 w-6 h-6 rounded-full border-2 border-primary-500 mix-blend-difference"
      animate={{
        x: cursor.x - 12, // center reticle
        y: cursor.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.2,
      }}
    />
  );
}
