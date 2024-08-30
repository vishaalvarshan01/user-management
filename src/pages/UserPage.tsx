import {useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {User} from '../constants/UserTypes.ts';
import {useQuery} from "@tanstack/react-query";
// import {fetchUserDetails} from '../utils/UserMethods.ts'

const fetchUserDetails = async (id : string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}

const UserPage = () => {

    const {id} = useParams<{ id: string }>();

    // const [isLoading, setIsLoading] = useState(true);

    const {isLoading, isError, data : user, error} = useQuery<User>({
        queryKey: ['user'],
        queryFn: () => fetchUserDetails(id),
    })

    if(isError) return <Typography variant="h5">Something went wrong {error.message}</Typography>;

    if (isLoading) return <Typography variant="button">Loading...</Typography>;

    return (
        <div>
            <Typography variant="h4">{user?.name}</Typography>
            <Typography variant="body2">{user?.email}</Typography>
        </div>
    );
};

export default UserPage;