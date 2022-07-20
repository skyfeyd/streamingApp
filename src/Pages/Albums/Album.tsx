import * as React from 'react';

import { play } from '../../Assets/pictures/index'
import { CoverNepal } from '../../Assets/pictures/index'
import { CoverHugo } from '../../Assets/pictures/index'
import './Album.less';


function Main() {

  let data = [{
    Title: 'Adios Bahamas',
    Artist: 'Nepal',
    Cover: CoverNepal,
  },
  {
    Title: 'La vie et quelques',
    Artist: 'Hugo TSR',
    Cover: CoverHugo,
  },
  {
    Title: 'La vie et quelques',
    Artist: 'Hugo TSR',
    Cover: CoverHugo,
  },
  {
    Title: 'La vie et quelques',
    Artist: 'Hugo TSR',
    Cover: CoverHugo,
  },
  {
    Title: 'La vie et quelques',
    Artist: 'Hugo TSR',
    Cover: CoverHugo,
  },
  {
    Title: 'La vie et quelques',
    Artist: 'Hugo TSR',
    Cover: CoverHugo,
  },
  {
    Title: 'La vie et quelques',
    Artist: 'Hugo TSR',
    Cover: CoverHugo,
  },
  {
    Title: 'La vie et quelques',
    Artist: 'Hugo TSR',
    Cover: CoverHugo,
  },
  {
    Title: 'Adios Bahamas',
    Artist: 'Nepal',
    Cover: CoverNepal,
  },
  {
    Title: 'Adios Bahamas',
    Artist: 'Nepal',
    Cover: CoverNepal,
  },
  {
    Title: 'Adios Bahamas',
    Artist: 'Nepal',
    Cover: CoverNepal,
  },
  {
    Title: 'Adios Bahamas',
    Artist: 'Nepal',
    Cover: CoverNepal,
  },
  {
    Title: 'Adios Bahamas',
    Artist: 'Nepal',
    Cover: CoverNepal,
  },
  {
    Title: 'Adios Bahamas',
    Artist: 'Nepal',
    Cover: CoverNepal,
  },
]


  return (
    <section className='AlbumsPage'>
      <div className='suggestions'>
        <button><img src={ play } alt="" /></button>
      </div>
      <section className='AlbumsList'>
        {data.map((item, index) => {
          return (
            <div key={ index } className='Album'>
              <div className='AlbumImg'>
                <img src={ item.Cover } alt="" />
                <span className='filterAlbum'></span>
                <a href="#"><img src={ play } alt="" /></a>
              </div>
              <div className='AlbumTitle'>
                <h3>{ item.Title }</h3>
                <p>{ item.Artist }</p>
              </div>
            </div>
          )
        })}
      </section>
    </section>
  );
}

export default Main;