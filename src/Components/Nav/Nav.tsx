import * as React from 'react';
import './Nav.less';

import { Logo } from '../../Assets/pictures/index';
import { Search } from '../../Assets/pictures/index';
import { Akira } from '../../Assets/pictures/index';
import Burger from '../Burger/Burger';



function Nav() {

    const UserPic = Akira
    const UserName = 'Akira'
    const Track = 'Adios Bahamas'
    

    let [isOpen, setIsOpen] = React.useState(false);

    

    return  (
        <nav>
            <a className='logo' href="#"><img src={ Logo } alt="" /></a>
            <a className={ isOpen ? 'burger close' : 'burger' } onClick={() => setIsOpen(!isOpen)}><span className='bar'></span></a>
            { isOpen && <Burger />}
            <div className='searchBar'>
                <div className='input'>
                    <input type="text"  placeholder='Looking for something ?' />
                    <img src={ Search } alt="" />
                </div>
            </div>
            <a href="">
                <div className='user'>
                    <img className='userPic' src={ UserPic } alt="" />
                    <div>
                        <h3 className='userName'>{ UserName }</h3>
                        <p className='listeningTo'>Ecoute { Track }</p>
                    </div>
                </div>
            </a>
        </nav>
    )
}

export default Nav;