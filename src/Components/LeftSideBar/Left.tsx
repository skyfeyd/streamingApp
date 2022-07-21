import * as React from 'react';

import { HomeIcon } from '../../Assets/pictures/index';
import { AlbumIcon } from '../../Assets/pictures/index';
import { TracksIcon } from '../../Assets/pictures/index';
import { GenreIcon } from '../../Assets/pictures/index';

import './Left.less';

function left() {
  return (
    <section className='left'>
      <h2>Browse</h2>
      <ul className='Browse'>
        <li><a href=""><img src={ HomeIcon } alt=''/>Home</a></li>
        <li><a href=""><img src={ AlbumIcon } alt=''/>Albums</a></li>
        <li><a href=""><img src={ TracksIcon } alt=''/>Track</a></li>
        <li><a href=""><img className='genreIcon' src={ GenreIcon } alt=''/>Genre</a></li>
      </ul>
      <h2 className='LibrairyTitle'>Librairy</h2>
      <ul className='Librairy'>
        <li><a href="">Playlists</a></li>
        <li><a href="">Recently Played</a></li>
        <li><a href="">Favorite Tracks</a></li>
        <li><a href="">Charts</a></li>
        <li><a href="">Radio</a></li>
      </ul>
    </section>
  );
}


export default left;