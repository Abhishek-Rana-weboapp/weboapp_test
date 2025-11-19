import { motion } from "framer-motion";

const BackgroundGrid = () => {
  const rows = 10;
  const cols = 10;
  const gap = 100 / 10;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(75%_25%_at_50%_0%,_#d4e4ff,_#fff)] ">
      {/* Vertical lines */}
      {Array.from({ length: cols }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-full w-[1px] bg-primary-200  origin-top"
          style={{ left: `${i * gap}%` }}
        />
      ))}

      {/* Horizontal lines */}
      {Array.from({ length: rows }).map((_, j) => (
        <motion.div
          key={`h-${j}`}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: j * 0.25,
            ease: "easeInOut",
          }}
          className="absolute left-0 w-full h-[1px] bg-primary-200  origin-left"
          style={{ top: `${j * gap}%` }}
        />
      ))}
    </div>
  );
};

export default BackgroundGrid;

// import { motion } from "motion/react";

// const BackgroundGrid = () => {
//   return (
//      <motion.div
//       className="fixed inset-0 -z-10"
//       initial={{ backgroundSize: "50px 50px, 50px 50px, 25px 25px, 25px 25px" }}
//       animate={{
//         backgroundSize: [
//           "50px 50px, 50px 50px, 25px 25px, 25px 25px",
//           "52px 52px, 52px 52px, 26px 26px, 26px 26px",
//           "50px 50px, 50px 50px, 25px 25px, 25px 25px",
//         ],
//       }}
//       transition={{
//         duration: 12, // slow and subtle
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       style={{
//         backgroundColor: "#e5e5f7",
//         opacity: 0.8,
//         backgroundImage: `
//           radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent),
//           radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent),
//           linear-gradient(#444cf7 2px, transparent 2px),
//           linear-gradient(90deg, #444cf7 2px, #e5e5f7 2px)
//         `,
//         backgroundPosition: "0 0, 25px 25px, 0 -1px, -1px 0",
//       }}
//     />
//   );
// };

// export default BackgroundGrid;
