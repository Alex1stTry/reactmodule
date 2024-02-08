import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch
    return (
        <div>
            <h2>
                {mission_name},
                {launch_year},
            </h2>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;