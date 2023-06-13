import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function SideNav() {

    const { collapsed } = useProSidebar();

    const theme = useTheme();

    const [click, setClicked] = useState(false);
    useEffect(() => {}, [click]);


    return <Sidebar style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.light}>

            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt='Channel Name' src='src/assets/avatars/me.png'/>
                {!collapsed && <Typography variant="body2" sx={styles.yourChannel}>Your Channel</Typography>}
                {!collapsed && <Typography variant="overline">Travel Together</Typography>}
            </Box>

            <Menu
                menuItemStyles={{
                    button: ({ level, active }) => {
                        return {
                            backgroundColor: active ? theme.palette.neutral.medium : undefined,
                        };
                    },
                }}>

                <MenuItem active={window.location.pathname === "/"} component={<Link to="/" />} onClick={() => setClicked(!click)} icon={<DashboardOutlinedIcon />}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>

                <MenuItem active={window.location.pathname === "/content"} component={<Link to='/content' />} onClick={() => setClicked(!click)} icon={<SourceOutlinedIcon />}>
                    <Typography variant="body2">Content</Typography>
                </MenuItem>

                <MenuItem active={window.location.pathname === '/analytics'} component={<Link to='/analytics' />} onClick={() => setClicked(!click)} icon={<AnalyticsOutlinedIcon />}>
                    <Typography variant="body2">Analytics</Typography>
                </MenuItem>

                <MenuItem active={window.location.pathname === '/customization'} component={<Link to='/customization' />} onClick={() => setClicked(!click)} icon={<StyleOutlinedIcon />}>
                    <Typography variant="body2">Customization</Typography>
                </MenuItem>

            </Menu>
        </Sidebar>
};

/** @type {import("@mui/material").SxProps} */
const styles = {
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        my: 5,
    },
    avatar: {
        width: '40%',
        height: 'auto',
        aspectRatio: 1
    },
    yourChannel: {
        mt: 1
    }
};

export default SideNav;