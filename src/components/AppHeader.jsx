import { AppBar, Badge, Box, Icon, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useProSidebar } from "react-pro-sidebar";

function AppHeader() {

    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();


    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                    <MenuIcon />
                </IconButton>
                <Box component='img' sx={styles.appLogo} src="/src/assets/sample-logo.png"/>
                <Typography sx={styles.appTitle}>Document Nature</Typography>
                <Box sx={{flexGrow: 1}} />
                <IconButton title='Notifications' color='secondary'>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                
                <IconButton title='Settings' color='secondary'>
                    <SettingsIcon />
                </IconButton>

                <IconButton title='Sign Out' color='secondary'>
                    <LogoutIcon />
                </IconButton>
                
            </Toolbar>
        </AppBar>
    )
};

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo: {
        borderRadius: 2,
        width: 60,
        ml: 2,
        cursor: 'pointer'
    },
    appTitle: {
        ml: 2
    }
};

export default AppHeader;