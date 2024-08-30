import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {User} from '../constants/UserTypes.ts'
import {stringAvatar} from '../utils/UserMethods.ts'
import DeleteIcon from '@mui/icons-material/Delete';

import {Link} from 'react-router-dom';

const UserCard = (props: User) => {
    return (
        <div>
            <Card sx={{borderRadius: '10px', marginBottom: "20px", maxWidth: "300px"}}>
                <Link to={`/users/${props.id}`}>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: 'center'
                        }}>
                        <Box sx={{margin: 'auto 10px'}}>
                            <Avatar {...stringAvatar(props.name)}/>
                        </Box>
                        <Box>
                            <Typography variant="h6">{props.name}</Typography>
                            <Typography variant="body1">{props.email}</Typography>
                        </Box>
                        <DeleteIcon/>
                    </CardContent>
                </Link>
            </Card>
        </div>
    );
};

export default UserCard;