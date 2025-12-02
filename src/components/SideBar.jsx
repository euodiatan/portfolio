import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import RoseImage from '../assets/rose-image.png';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

function SideBar(){
    const drawerWidth = 300;

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
          },
        }}
        variant="permanent"
        anchor="left"
      >
      <Box component="description" sx={{textAlign:'center', width:120}}>
        <MenuIcon />
        <img src={RoseImage} width="120" alt="rose-image"></img>
        <h3 className="cousine-bold">euodia</h3>
        <p className="cousine-regular">Greek Εὐοδία, meaning `prosperous journey` </p>
      </Box>
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
        </List>
      </Box>
      </Drawer>
    );
}

export default SideBar;