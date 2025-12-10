import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import RoseImageGrey from '../assets/rose-image.png';
import RoseImageOrange from '../assets/rose-orange-image.png';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';
import Link from '@mui/material/Link';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorScheme, useTheme } from "@mui/material/styles";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

function SideBar(){
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();
    if (!mode) {
      return null;
    }

    const location = useLocation();
    const backButtonVisible = location.pathname.includes("/post");

    const drawerWidth = 300;
    const [menuOpen, setMenuOpen] = useState(()=> {
      const saved = sessionStorage.getItem("menuOpen");
      return saved === "true";
    });

    const [sidebarImage, setSidebarImage] = useState(RoseImageGrey);

    function hoverImageIn(){
      setSidebarImage(RoseImageOrange);
    }

    function hoverImageOut(){
      setSidebarImage(RoseImageGrey);
    }

    function toggleMenu(){
      setMenuOpen((prevState =>{
        const newState = !prevState;
        sessionStorage.setItem("menuOpen", newState);
        return newState;
      }));
    }

    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: theme.palette.background.default,
            // transition: 'background-color 0.4s ease-in-out',
            
          },
        }}
        variant="permanent"
        anchor="left"
      >
      <Box component="description" sx={{textAlign:'center', width:120}}>
        <MenuIcon onClick={toggleMenu} className="menu-icon" sx={{color: theme.palette.link.default, "&:hover":{color: theme.palette.link.hover}}} />
        <AnimatePresence mode="popLayout">
          <motion.img key={sidebarImage} initial={false} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}} onMouseOver={hoverImageIn} onMouseOut={hoverImageOut} src={sidebarImage} width="120" alt="rose-image"></motion.img>
        </AnimatePresence>
        <h3 className="cousine-bold">euodia</h3>
        <p className="cousine-regular">Greek Εὐοδία, meaning `prosperous journey` </p>
       
      </Box>
      <AnimatePresence initial={false} mode="wait">
        {menuOpen ? 
        <motion.div  
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        key="box">
        <Box component="nav-links" sx={{textAlign:'center', width:"40%"}}>
        <List>
            <ListItem sx={{border:'solid 1px #d9d9d9', backgroundColor:'black', mb:2, display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                 <NavLink className="cousine-bold-nav" to="/">home</NavLink>
            </ListItem>
            <ListItem sx={{border:'solid 1px #d9d9d9', backgroundColor:'black', mb:2, display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                <NavLink className="cousine-bold-nav" to="/about">about</NavLink>
            </ListItem>
            <ListItem sx={{border:'solid 1px #d9d9d9', backgroundColor:'black', mb:2, display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                <NavLink className="cousine-bold-nav" to="/projects">projects</NavLink>
            </ListItem>
            {backButtonVisible ? <Link sx={{ color: theme.palette.link.default, "&:hover":{color: theme.palette.link.hover}, fontFamily: 'Cousine', fontWeight: 'bold', textDecoration: 'none', fontSize: 20}} href="/projects">↢</Link> : null}
        </List>
      </Box> </motion.div> : <motion.div  
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ duration: 0.4, ease: "easeInOut" }}> {mode === 'light' ? <NightsStayIcon className="mode-toggle" onClick={()=>setMode('dark')} /> : <LightModeIcon className="mode-toggle" onClick={()=>setMode('light')} />} </motion.div> }
      </AnimatePresence>
      </Drawer>
    );
}

export default SideBar;