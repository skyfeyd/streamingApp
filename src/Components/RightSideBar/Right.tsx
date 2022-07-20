import * as React from 'react';
import './Right.less';
//const Nepal = require('./Nepal.mp3');



function Right() {

    const test = 'https://open.spotify.com/track/4VrWlk8IQxevMvERoX08iC'

    return (
        <section className='right'>
        <h1>Right</h1>
        <audio>
            <source src={ test } />
        </audio>
        </section>
    );
}


export default Right;