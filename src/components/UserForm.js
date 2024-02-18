import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../services/userService";

const UserForm = ({setUsers}) => {
    const {register,handleSubmit} = useForm()
    const save = (user) => {
      userService.setUser(user).then(({data})=> setUsers(prev=>[...prev,data]))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'}{...register('email')}/>
                <button>Save User</button>
            </form>
        </div>
    );
};

export default UserForm;