import React, {useEffect, useState} from 'react';
import {spaceXService} from "../services/spaceX.service";
import launch from "./Launch";
import Launch from "./Launch";

const Launches = () => {

    let [launches, setLaunches] = useState([]);
    useEffect(() => {
        spaceXService.getAll().then(({data}) => setLaunches(data))
    }, []);

    return (
        <div>
            {launches.map(launch=> <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export default Launches;