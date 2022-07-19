import * as React from 'react';
import './Right.less';
const Nepal = require('./Nepal.mp3');



function Right() {
    return (
        <section className='right'>
        <h1>Right</h1>
        <audio controls>
            <source src={ Nepal }></source>
        </audio>
        </section>
    );
}


export default Right;