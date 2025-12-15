import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from "react-router-dom";
import SideBar from './components/SideBar';
import { motion } from "framer-motion";
import { useColorScheme } from "@mui/material/styles";
import { Toolbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";

export default function MainLayout() {
  const theme = useTheme();
  const { mode } = useColorScheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
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
        sx={{ flexGrow: 1, p: 3, height:"100vh", overflowY: 'auto', ml: isDesktop ? '300px' : '0px'}}
      >
        <Toolbar/>
        <Outlet/>
      </Box>
      </motion.div>
    </Box>
    </>
  );
}
