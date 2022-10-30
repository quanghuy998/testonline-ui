import { Avatar, ListItemIcon, ListItemText, Menu, MenuItem, Paper, Typography, useScrollTrigger } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import './Notification.scss';

function Notification({ anchorEl, open, onClose }) {
    const trigger = useScrollTrigger();

    return (
        <Menu
            id="notification"
            className="notification"
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            in={!trigger}
        >
            <span className="notification__header">Notifications</span>
            <MenuItem onClose={onClose}>
                <ListItemIcon>
                    <Avatar>
                        <NotificationsActiveIcon />
                    </Avatar>
                </ListItemIcon>
                <div>
                    <p>
                        <span>Emily Jane</span> replied to your comment: "Hello"
                    </p>
                    <p>
                        <AccessTimeIcon fontSize="small" />
                        Just now
                    </p>
                </div>
            </MenuItem>
            <MenuItem onClose={onClose}>
                <ListItemIcon>
                    <Avatar>
                        <NotificationsActiveIcon />
                    </Avatar>
                </ListItemIcon>
                <div>
                    <p>
                        <span>Emily Jane</span> replied to your comment: "Hello"
                    </p>
                    <p>
                        <AccessTimeIcon fontSize="small" />
                        Just now
                    </p>
                </div>
            </MenuItem>
            <MenuItem onClose={onClose}>
                <ListItemIcon>
                    <Avatar>
                        <NotificationsActiveIcon />
                    </Avatar>
                </ListItemIcon>
                <div>
                    <p>
                        <span>Emily Jane</span> replied to your comment: "Hello"
                    </p>
                    <p>
                        <AccessTimeIcon fontSize="small" />
                        Just now
                    </p>
                </div>
            </MenuItem>
            <MenuItem onClose={onClose}>
                <ListItemIcon>
                    <Avatar>
                        <NotificationsActiveIcon />
                    </Avatar>
                </ListItemIcon>
                <div>
                    <p>
                        <span>Emily Jane</span> replied to your comment: "Hello"
                    </p>
                    <p>
                        <AccessTimeIcon fontSize="small" />
                        Just now
                    </p>
                </div>
            </MenuItem>
        </Menu>
    );
}

export default Notification;
