import * as React from 'react';
import './Nav.less';

import { Logo } from '../../Assets/pictures/index';
import { Search } from '../../Assets/pictures/index';
import { Akira } from '../../Assets/pictures/index';


function Nav() {

    const UserPic = Akira
    const UserName = 'Akira'
    const Listening = 'Fenêtre de rue'

    return  (
        <nav>
            <a className='logo' href="#"><img src={ Logo } alt="" /></a>
            <div className='searchBar'>
                <input type="text" className='input' placeholder='Looking for something ?' />
                <img src={ Search } alt="" />
            </div>
            <a href="">
                <div className='user'>
                    <img className='userPic' src={ UserPic } alt="" />
                    <div>
                        <h3 className='userName'>{ UserName }</h3>
                        <p className='listeningTo'>Ecoute { Listening } </p>
                    </div>
                </div>
            </a>
        </nav>
    )
}

export default Nav;