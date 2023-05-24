import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useHistory } from "react-router-dom";
import { MainPageRoute } from "./MainPage";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Alert, CircularProgress } from '@mui/material';
import { AuthContext } from '../context/AuthContext.js';

const LoginPage = () => {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state: ContextState, login } = useContext(AuthContext);
    const {
        isLoginPending,
        loggedInUser,
        loginError
    } = ContextState;

    useEffect(() => {
        if (loggedInUser) {
            history.push(MainPageRoute);
        }
        else {
            history.push(LoginPageRoute)
        }
    }, [loggedInUser])


    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password);
    };

    const wrappedDivStyle = {
        width: '50%', margin: '100px auto',
        display: 'flex', justifyContent: 'center',
        alignItems: 'center',
        border: '2px dashed lightgray',
        padding: '25px'
    };

    return (
        <div style={wrappedDivStyle}>
            {
                loginError?.length > 0 &&
                <Alert>{loginError}</Alert>}
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Welcome to Sign In Screen
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        {
                            isLoginPending ? <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress />
                            </div> :
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                        }
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default LoginPage;
export const LoginPageRoute = '/';