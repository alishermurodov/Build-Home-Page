import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Switcher from './Switcher';

export default function Burger() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { pathname } = useLocation()


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}

    >

      <Divider />
      <List>
        <div className="pl-[40px]">
          <div className="mb-[13px] ml-[50px]">
            <Switcher />
          </div>
          <Link to="/">
            <p style={{ color: pathname == "/" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>Home</p>
          </Link>
          <Link to="/about">
            <p style={{ color: pathname == "/about" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>About</p>
          </Link>
          <Link to="/contact">
            <p style={{ color: pathname == "/contact" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>Contact</p>
          </Link>
          <Link to="/gallery">
            <p style={{ color: pathname == "/gallery" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>Gallery</p>
          </Link>
          <Link to="/services">
            <p style={{ color: pathname == "/services" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>Services</p>
          </Link>
          <Link to="/story">
            <p style={{ color: pathname == "/story" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>Story</p>
          </Link>
          <Link to="/process">
            <p style={{ color: pathname == "/process" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>Process</p>
          </Link>
          <Link to="/careers">
            <p style={{ color: pathname == "/careers" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>Careers</p>
          </Link>
          <Link to="/news">
            <p style={{ color: pathname == "/news" ? "red" : "#000" }} className='text-[24px] mb-[10px] '>News</p>
          </Link>

        </div>
      </List>


    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

          <Button onClick={toggleDrawer(anchor, true)}><IconButton><MenuIcon>{anchor}</MenuIcon></IconButton></Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}