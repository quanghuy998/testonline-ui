import { AccountCircle } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Input,
    InputAdornment,
    InputLabel,
    Link,
    Paper,
    Typography,
} from '@mui/material';

import './Login.scss';

function Login() {
    return (
        <div className="login_container">
            <Paper className="login">
                <div className="login__banner"></div>
                <div className="login__content">
                    <Typography variant="h4">Login Account</Typography>
                    <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">User Account</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div>
                        <FormControlLabel label="Keep me signed in" control={<Checkbox />} />
                        <Link>Register an account?</Link>
                    </div>
                    <Button variant="contained" color="success">
                        Sign in
                    </Button>
                </div>
            </Paper>
        </div>
    );
}

export default Login;
