import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import BackupIcon from '@mui/icons-material/Backup';
import { Link, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';

import './menu.scss';

function Menu() {
    return (
        <div className="menu">
            <div className="container">
                <div className="menu__logo">
                    <a href="index.html" className="logo">
                        <h3>Test Online</h3>
                    </a>
                </div>
                <Typography>Apps</Typography>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <StarBorderIcon></StarBorderIcon>
                        </ListItemIcon>
                        <ListItemText>Starter</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsIcon></SettingsIcon>
                        </ListItemIcon>
                        <ListItemText>Settings</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <PeopleAltIcon></PeopleAltIcon>
                        </ListItemIcon>
                        <ListItemText>Users</ListItemText>
                    </MenuItem>
                </MenuList>
                <Typography>Modules</Typography>
                <MenuList>
                    <Link href="/tests" underline="none" color="inherit">
                        <MenuItem>
                            <ListItemIcon>
                                <QuizIcon></QuizIcon>
                            </ListItemIcon>
                            <ListItemText>Tests</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/questions" underline="none" color="inherit">
                        <MenuItem>
                            <ListItemIcon>
                                <ContactSupportOutlinedIcon></ContactSupportOutlinedIcon>
                            </ListItemIcon>
                            <ListItemText>Questions</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/submissions" underline="none" color="inherit">
                        <MenuItem>
                            <ListItemIcon>
                                <BackupIcon></BackupIcon>
                            </ListItemIcon>
                            <ListItemText>Submissions</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/results" underline="none" color="inherit">
                        <MenuItem>
                            <ListItemIcon>
                                <FolderSharedIcon></FolderSharedIcon>
                            </ListItemIcon>
                            <ListItemText>Results</ListItemText>
                        </MenuItem>
                    </Link>
                </MenuList>
            </div>
        </div>
    );
}

export default Menu;
