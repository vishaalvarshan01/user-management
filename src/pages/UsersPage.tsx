import {useState, useEffect} from "react";
import axios from "axios";
import RefreshIcon from '@mui/icons-material/Refresh';
import UserCard from "../components/UserCard.tsx";
import { User } from '../constants/UserTypes.ts'
import UserForm from "../components/UserForm.tsx";

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUsers(response.data);
        }).catch((error) => {
            console.log(error);
            setIsError(true);
        }).finally(() => {
            console.log("Finally");
            setIsLoading(false);
        });
    }, []);


    if (isError) return <h1>Something went wrong</h1>

    if (isLoading) return <RefreshIcon/>

    return (
        <div>
            <UserForm/>
            {users.map((user : User) => (
                <UserCard key={user.id} {...user}/>
            ))}
        </div>
    );
};

export default UsersPage;
