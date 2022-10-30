import {
    Avatar,
    Badge,
    Breadcrumbs,
    Button,
    Divider,
    IconButton,
    Link,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

import './header.scss';
import Notification from '~/components/Notification';

function Header() {
    const [anchorE1Account, setAnchorE1Account] = useState(null);
    const [anchorE1Notification, setAnchorE1Notification] = useState(null);
    const openAccountMenu = anchorE1Account ? true : false;
    const openNotification = anchorE1Notification ? true : false;

    const handleOpenAccountMenu = (event) => {
        setAnchorE1Account(event.currentTarget);
    };

    const handleOpenNotification = (event) => {
        setAnchorE1Notification(event.currentTarget);
    };

    const handleCloseAccountMenu = () => {
        setAnchorE1Account(null);
    };

    const handleCloseNotification = () => {
        setAnchorE1Notification(null);
    };

    const menu = (
        <Menu id="basic-menu" anchorEl={anchorE1Account} open={openAccountMenu} onClose={handleCloseAccountMenu}>
            <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                    <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText>Account</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                    <SettingsSuggestIcon />
                </ListItemIcon>
                <ListItemText>Setting</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                    <ChatBubbleOutlineIcon />
                </ListItemIcon>
                <ListItemText>Feedback</ListItemText>
            </MenuItem>
            <Divider />
            <Link href="/login" underline="none" onClick={handleCloseAccountMenu}>
                <MenuItem>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Log out</ListItemText>
                </MenuItem>
            </Link>
        </Menu>
    );

    return (
        <header className="header">
            <div className="header--right">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Core
                    </Link>
                    <Link underline="hover" color="text.primary" href="#" aria-current="page">
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </div>
            <div className="header--left">
                <IconButton
                    aria-controls={openNotification ? 'notification' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openNotification ? 'true' : undefined}
                    onClick={handleOpenNotification}
                >
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsActiveIcon color="action" />
                    </Badge>
                </IconButton>
                <Button
                    id="basic-button"
                    aria-controls={openAccountMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openAccountMenu ? 'true' : undefined}
                    onClick={handleOpenAccountMenu}
                    color="inherit"
                    className="user"
                >
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>H</Avatar>
                    <Typography>Huy Huynh</Typography>
                </Button>
            </div>
            {menu}
            <Notification
                open={openNotification}
                anchorEl={anchorE1Notification}
                onClose={handleCloseNotification}
            ></Notification>
        </header>
    );
}

export default Header;
