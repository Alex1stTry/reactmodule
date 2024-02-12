import React, {useEffect, useState} from 'react';
import {spaceXService} from "../services/spaceX.service";

import Launch from "./Launch";

const Launches = () => {

    let [launches, setLaunches] = useState([]);
    useEffect(() => {
        spaceXService.getAll().then(({data}) => {
            const filtered = data.filter(item => item.launch_year !== '2020');
                setLaunches(filtered)
        })
    }, []);

    return (
        <div>
            {launches.map(launch=> <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export default Launches;