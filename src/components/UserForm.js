
import {useForm} from "react-hook-form";
import {userService} from "../services/userService";

const UserForm = ({setUsers}) => {

    const {register,handleSubmit,reset} = useForm();
    const save  = (user)=>{
          userService.create(user).then(({data})=>setUsers(prev=>[...prev,data]))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'userName'} {...register('userName')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>save</button>
                <hr/>
            </form>
        </div>
    );
};

export {UserForm};