import { Avatar, Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { AppProps } from "../App";
import { useState } from "react";

const arr = [
    {
        text: 'Search',
        icon: <SearchIcon />
    },
    {
        text: 'Updates',
        icon: <AccessTimeIcon />
    },
    {
        text: 'Settigns & members',
        icon: <SettingsIcon />
    }
]
const jounrals = [
    {
        text: 'All mail',
        icon: <MenuBookIcon />
    },
    {
        text: 'Trash',
        icon: <LibraryBooksIcon />
    },
    {
        text: "Spam",
        icon: <LeaderboardIcon />
    }
]
const Navbar = ({ setMode, mode }: AppProps) => {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Box
            flex={2}
            sx={{ width: 150, borderRight: "2px solid #dedede", height: "100vh" }}
        >

            <List>
                <ListItem >
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                              <Avatar sx={{ mr: 2 }} alt={"Avatar"} src="https://avatars.githubusercontent.com/u/40629087?s=96&v=4" />
                    <Typography color={theme.palette.text.primary}>Abhishek Panwar</Typography>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>abhishekpanwar1718@gmail.com</MenuItem>
                            <MenuItem onClick={handleClose}>Create work account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                  
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                        <ListItemIcon color={theme.palette.text.primary}>
                            {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                        </ListItemIcon>
                        <ListItemText sx={{ color: theme.palette.text.primary }} primary="Change Theme" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                {arr.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon color={theme.palette.text.primary}>{
                                text.icon
                            }
                            </ListItemIcon>
                            <ListItemText sx={{ color: theme.palette.text.primary }} primary={text.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {jounrals.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon color={theme.palette.text.primary}>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText primary={text.text} sx={{ color: theme.palette.text.primary }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Navbar