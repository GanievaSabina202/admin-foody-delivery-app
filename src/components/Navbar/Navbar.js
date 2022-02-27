import React from 'react'
import logo from '../../assets/images/logo.svg'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import CustomDrawer from '../Drawer';
import { drawer } from '../../store/slices/drawer/drawerSlices';
import { useDispatch } from 'react-redux';
import { AppBarStyled } from './Navbar.styled';
import AddButton from '../Buttons/addButton'

export const Navbar = () => {

    const dispatch = useDispatch();

    return (

        <AppBarStyled position="static">
            <Container maxWidth="xl">
                <CustomDrawer />
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => dispatch(drawer())}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={logo} alt="" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <img src={logo} alt="" />
                    </Box>

                    <Box sx={{ flexGrow: 0, flexDirection: 'row' }}>
                        {/* <Tooltip title="Open settings"> */}
                        <IconButton sx={{ p: 0 }}>
                            {/* <AddButton /> */}
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        {/* </Tooltip> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBarStyled >
    );
};




