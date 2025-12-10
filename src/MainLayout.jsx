import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from "react-router-dom";
import SideBar from './components/SideBar';
import { motion } from "framer-motion";
import { useColorScheme } from "@mui/material/styles";


export default function MainLayout() {
  const { mode } = useColorScheme();
  return (
    <motion.div
      key={mode} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{display: 'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
    >
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: 'transparent' }}
      >
        <Outlet/>
      </Box>
    </motion.div>
    
  );
}
