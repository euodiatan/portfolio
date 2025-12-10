import Box from '@mui/material/Box';
import { motion } from "framer-motion";

function Home(){
   return (
   <motion.div
   initial = {{opacity:0}}
   animate = {{opacity: 1}}
   exit = {{opacity: 0}}
   transition = {{duration: 0.2}}
   >
   <Box>
      <p className='cousine-bold'>welcome to my portfolio!</p>
      <p className="cousine-regular">I am an aspiring full-stack developer who is learning to create clean, fast and intuitive websites. </p>
      <p className="cousine-regular">to me, simplicity is above all else. </p>
      <p className="cousine-regular">I'm always on the lookout for opportunities to play a part in creating equity-based user design experiences.</p>
   </Box>
   </motion.div>);
}

export default Home;