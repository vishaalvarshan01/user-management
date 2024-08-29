import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {User} from '../constants/UserTypes.ts'
import {stringAvatar} from '../utils/UserMethods.ts'

const UserCard = (props: User) => {
    return (
        <div>
            <Card sx={{borderRadius: '10px', marginBottom: "20px", maxWidth: "300px"}}>
                <CardContent
                    sx={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: 'center'}}>
                    <Box sx={{margin:'auto 10px'}}>
                        <Avatar {...stringAvatar(props.name)}/>
                    </Box>
                    <Box>
                        <Typography variant="h6" >{props.name}</Typography>
                        <Typography variant="body1">{props.email}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserCard;