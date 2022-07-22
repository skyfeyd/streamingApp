import * as React from 'react';
import { CoverNepal } from '../../Assets/pictures/index';
import './Right.less';

import  Nuits  from '../../Assets/music/444Nuits/index'

import { prev } from '../../Assets/pictures/index'
import { play } from '../../Assets/pictures/index'
import { next } from '../../Assets/pictures/index'
import { pause } from '../../Assets/pictures/index'


function Right() {

    let data = {
        Track: 'Opening',
        Artist: 'Nepal',
        Source: 'test',
        Cover: CoverNepal,
    };

    let [playing, setPlaying] = React.useState(true);
    console.log(playing);
    let [noplaying, setnoPlaying] = React.useState(false);
    console.log('no', noplaying);


    


    return (
        <section className='right'>
            <div className='driver'>
                <audio>
                    <source />
                </audio>
                <div className='driver-cover'>
                    <img src={ data.Cover } alt="" />
                    <span className='filterCover'></span>
                </div>
                <div className='driver-info'>
                    <h3>{ data.Track }</h3>
                    <p>{ data.Artist }</p>
                    <div className='driver-duration'>
                        <input type='range' name='progress-bar' value='50' min='0' max='1000' step='0.1'/>
                    </div>
                    <div className='driver-time'>
                        <span>0.00</span>
                        <span>3.13</span>
                    </div>
                    <div className='driver-controls'>
                        <button><img src={ prev } alt="" /></button>
                        { noplaying && <button className={ playing ? 'btn-play btn-hidden' : 'btn-play' } onClick={() => {setPlaying(!playing); setnoPlaying(!noplaying)}}><img src={ play } alt="" /></button> }
                        { playing && <button className={ noplaying ? 'btn-pause btn-hidden' : 'btn-pause' } onClick={() => {setPlaying(!playing); setnoPlaying(!noplaying)}}><img src={ pause } alt="" /></button>}
                        <button><img src={ next } alt="" /></button>
                    </div>
                    <div className='nextInLine'>
                        

                    </div>
                </div>
            </div>
        
        </section>
    );
}

export default Right;