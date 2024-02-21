import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../services/userService";
import {UserDetails} from "../Components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        userService.byId(id).then(({data}) => setUserDetails(data))
    }, [id]);
    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails} key={userDetails.id}/>}
        </div>
    );
};

export {UserDetailsPage};