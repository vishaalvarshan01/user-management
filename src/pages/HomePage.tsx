import {Link} from 'react-router-dom';

import {Button,Typography} from '@mui/material';

const HomePage = () => {
    return (
        <div>
            <h1>Home Page 123</h1>
            <Button variant="contained" component={Link} to="/user">
                <Typography>User</Typography>
            </Button>
        </div>
    )
}

export default HomePage;