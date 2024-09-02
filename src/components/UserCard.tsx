import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {User} from '../constants/UserTypes.ts'
import DeleteIcon from '@mui/icons-material/Delete';

import {Link} from 'react-router-dom';

const UserCard = (props: User) => {

    // TODO : Implement update functionality

    const handleDelete = (id : number) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                console.log(response)
                console.log("data deleted")
            }).catch((error) => {
            console.log(error)
        }).finally(() => {
            console.log("Finally");
        })
    }

    return (
        <div>
            <Card sx={{borderRadius: '10px', marginBottom: "20px", maxWidth: "300px"}}>

                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: 'center'
                    }}>
                    <Link to={`/users/${props.id}`}>
                        <Box>
                            <Typography variant="h6">{props.name}</Typography>
                            <Typography variant="body1">{props.email}</Typography>
                        </Box>
                    </Link>
                    <DeleteIcon onClick={() => handleDelete(props.id)}/>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserCard;