import { motion } from "framer-motion";
import { Cloud, Shield, Cpu, Rocket, LineChart } from "lucide-react"; // Example icons

const icons = [
  { id: 1, Icon: Cloud, className: "text-blue-400/30  md:text-blue-400/60 w-10 h-10 top-20 left-1/2" },
  { id: 2, Icon: Shield, className: "text-green-400/30 md:text-green-400/60 w-10 h-10 top-1/3 left-20" },
  { id: 3, Icon: Cpu, className: "text-purple-400/30 md:text-purple-400/60 w-10 h-10 bottom-20 right-16" },
  { id: 4, Icon: Rocket, className: "text-red-400/30 md:text-red-400/60 w-12 h-12 top-1/4 right-10" },
  { id: 5, Icon: LineChart, className: "text-yellow-400/30 md:text-yellow-400/60 w-10 h-10 bottom-10 left-1/4" },
]; 

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0  overflow-hidden -z-10">
      {icons.map(({ id, Icon, className }) => (
        <motion.div
          key={id}
          className={`absolute ${className} -z-10`}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4 + Math.random() * 2, // slightly different speed
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2, // staggered start
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
