import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from "react-router-dom";
import SideBar from './components/SideBar';
import { motion } from "framer-motion";
import { useColorScheme } from "@mui/material/styles";
import { Toolbar } from '@mui/material';


export default function MainLayout() {
  const { mode } = useColorScheme();
  return (
    <>
    <CssBaseline />
    <Box sx={{display: 'flex'}}>
      <SideBar />
      <motion.div
        key={mode} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: 'transparent' }}
      >
        <Toolbar/>
        <Outlet/>
      </Box>
      </motion.div>
    </Box>
    </>
  );
}
