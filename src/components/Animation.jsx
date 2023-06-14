// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Animation = () => {
//   const containerVariants = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1, transition: { duration: 1 } },
//     exit: { opacity: 0, transition: { duration: 0.5 } }
//   };

//   const textVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//     exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } }
//   };

//   const textColors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ffff00"];
//   const [randomColor, setRandomColor] = useState(textColors[0]);

//   const getRandomColor = () => {
//     const color = textColors[Math.floor(Math.random() * textColors.length)];
//     setRandomColor(color);
//   };

//   return (
//     <motion.div
//       className="container"
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={containerVariants}
//     >
//       <motion.h1
//         className="text"
//         variants={textVariants}
//         whileHover={{ scale: 1.1, color: randomColor }}
//         whileTap={{ scale: 0.9 }}
//         style={{ fontSize: "3rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
//         onMouseEnter={getRandomColor}
//       >
//         This is a Text Animation
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default Animation;

import React, { useState } from "react";
import { motion } from "framer-motion";

const Animation = ({body}) => {
      const containerVariants = {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 1 } },
            exit: { opacity: 0, transition: { duration: 0.5 } }
      };

      const textVariants = {
            initial: { opacity: 0, y: 50, rotateX: -180, rotateY: -180 },
            animate: { opacity: 1, y: 0, rotateX: 0, rotateY: 0, transition: { duration: 1, ease: "easeOut" } },
            exit: { opacity: 0, y: -50, rotateX: -180, rotateY: -180, transition: { duration: 1, ease: "easeIn" } }
      };

      const textColors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ffff00"];
      const [randomColor, setRandomColor] = useState(textColors[0]);

      const getRandomColor = () => {
            const color = textColors[Math.floor(Math.random() * textColors.length)];
            setRandomColor(color);
      };

      return (
            <motion.div
                  className="container"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={containerVariants}
            >
                  <motion.h1
                        className="text text-center my-12"
                        variants={textVariants}
                        whileHover={{ scale: 1.5, color: randomColor, rotateX: 360, rotateY: 360 }}
                        whileTap={{ scale: 0.5 }}
                        style={{
                              fontSize: "3rem",
                              fontWeight: "bold",
                              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                              transformStyle: "preserve-3d",
                              transform: "perspective(500px)",
                        }}
                        onMouseEnter={getRandomColor}
                  >
                      {body}
                  </motion.h1>
            </motion.div>
      );
};

export default Animation;

