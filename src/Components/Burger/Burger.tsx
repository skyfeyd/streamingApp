import * as React from 'react';
import { Logo } from '../../Assets/pictures';

import { HomeIcon } from '../../Assets/pictures/index';
import { AlbumIcon } from '../../Assets/pictures/index';
import { TracksIcon } from '../../Assets/pictures/index';
import { GenreIcon } from '../../Assets/pictures/index';

import './Burger.less';

function Burger(){
    return (
        <section className='burgerMenu'>
            <img src={ Logo } alt="logo" />
            <h2>Browse</h2>
            <div className='icons'>
                
                <a className='Home' href="">
                    <img src={ HomeIcon } alt="" />
                    <h4>Home</h4>
                </a>
                
                <a className='Albums' href="">
                    <img src={ AlbumIcon } alt="" />
                    <h4>Albums</h4>
                </a>

                <a className='Tracks' href="">
                    <img src={ TracksIcon } alt="" /> 
                    <h4>Tracks</h4>
                </a>
                
                <a className='Genre' href="">
                    <img src={ GenreIcon } alt="" />
                    <h4>Genre</h4>
                </a>
                
            </div>
            <h2>Librairy</h2>
            <ul>  
                <li><a href="">Playlists</a></li>
                <li><a href="">Recently Played</a></li>
                <li><a href="">Favorite Tracks</a></li>
                <li><a href="">Charts</a></li>
                <li><a href="">Radio</a></li>
            </ul>
       </section>
    );
}


export default Burger;