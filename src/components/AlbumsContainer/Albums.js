import React, {useEffect, useState} from 'react';
import {AlbumsService} from "../../services/AlbumsService";
import {Album} from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        AlbumsService.getAll().then(({data})=>setAlbums(data))
    }, []);
    return (
        <div>
            {albums.map(album=> <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};