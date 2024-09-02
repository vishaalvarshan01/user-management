import {useEffect, useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import axios from 'axios';
import {ToastContainer} from 'react-toastify';

import TextField from '@mui/material/TextField';

import {UserFormType} from '../constants/UserTypes.ts';

function UserForm() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<UserFormType>();

    const [success, setSuccess] = useState(false);


    const onSubmit: SubmitHandler<UserFormType> = (data: UserFormType) => {
        axios.postForm('https://jsonplaceholder.typicode.com/users/', {
            firstName: data.name,
            lastName: data.email,
        }).then((response) => {
            setSuccess(true)
            console.log(response);
            reset();
        }).catch((errors) => {
            console.log(errors);
        })
        console.log(data);
    };

    useEffect(() => {
        console.log("User added")
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [success]);


    return <div>
        <h1>User Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '50%',
                zIndex: 1000,
                transform: 'translateX(50%)',
                justifyContent: 'center'
            }}>
                {success ? <ToastContainer position="top-right" autoClose={5000}></ToastContainer> : <></>}
            </div>
            <TextField
                id="name"
                label="name"
                placeholder="John Doe"
                variant="filled"
                sx={{backgroundColor: "white", borderRadius: "5px"}}
                {...register("name", {required: "Name is necessary"})}
                helperText={errors.name?.message}
                error={!!errors.name}
            />
            <br/>
            <TextField
                id="email"
                label="email"
                placeholder="johndoe@gmail.com"
                variant="filled"
                sx={{backgroundColor: "white", borderRadius: "5px"}}
                {...register("email", {required: "Email is necessary"})}
                helperText={errors.email?.message}
                error={!!errors.email}

            />
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>;
}

export default UserForm;