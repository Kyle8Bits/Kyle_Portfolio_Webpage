import { motion } from "framer-motion";

const shapes = [
  // reds
  { type: "circle", size: 80, x: "10%", y: "5%", duration: 10, color: "rgba(220,40,40,0.07)" },
  { type: "square", size: 50, x: "60%", y: "12%", duration: 12, color: "rgba(200,30,30,0.06)", rotate: 35 },
  // pinks
  { type: "circle", size: 70, x: "80%", y: "25%", duration: 9, color: "rgba(240,100,150,0.07)" },
  { type: "triangle", size: 60, x: "25%", y: "35%", duration: 11, color: "rgba(255,130,170,0.06)" },
  // blues
  { type: "circle", size: 90, x: "70%", y: "55%", duration: 10, color: "rgba(60,130,240,0.07)" },
  { type: "square", size: 55, x: "15%", y: "65%", duration: 13, color: "rgba(80,150,255,0.06)", rotate: 25 },
  // oranges
  { type: "circle", size: 65, x: "45%", y: "80%", duration: 8, color: "rgba(255,140,50,0.07)" },
  { type: "triangle", size: 50, x: "90%", y: "75%", duration: 11, color: "rgba(255,160,60,0.06)" },
  // extras
  { type: "square", size: 45, x: "35%", y: "48%", duration: 9, color: "rgba(220,50,80,0.05)", rotate: 40 },
  { type: "circle", size: 60, x: "55%", y: "30%", duration: 10, color: "rgba(100,160,255,0.06)" },
];

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -40, 0, 40, 0],
            x: [0, 30, 0, -30, 0],
            rotate: shape.rotate ? [0, shape.rotate, 0, -shape.rotate, 0] : [0, 10, 0, -10, 0],
            scale: [1, 1.05, 1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && (
            <div
              className="w-full h-full rounded-full"
              style={{ backgroundColor: shape.color }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="w-full h-full rounded-2xl"
              style={{ backgroundColor: shape.color }}
            />
          )}
          {shape.type === "triangle" && (
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,10 90,90 10,90"
                fill={shape.color}
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
