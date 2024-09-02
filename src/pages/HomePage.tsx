import {Link} from 'react-router-dom';
import {Button, Typography} from '@mui/material';

const HomePage = () => {


    return (
        <div>
            <h1>Home Page</h1>
            <Button variant="contained" component={Link} to="/users">
                <Typography>Users</Typography>

            </Button>
        </div>
    )
}

export default HomePage;