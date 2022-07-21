import React from 'react'


import { CoverNepal } from '../../pictures/index'
const FauteDeTime = require('./01 Faute De Time.mp3');
const Oxmose = require('./02 Oxmose.mp3');
const RiendSpecial = require("./03 Rien d'Spécial.mp3");
const nuits = require('./04 444 Nuits.mp3');
const YOLO = require('./05 YOLO.mp3');
const MalikAlMawt = require('./06 Malik Al Mawt.mp3');
const LaisseRouler = require('./07 Laisse Rouler.mp3');
const Overdab = require('./08 Overdab ft. Fixpen Sill & Waltmann.mp3');
const BizarreCity = require('./09 Bizarre City ft. M Le Maudit.mp3');
const SugaSuga = require('./10 Suga Suga ft. Doums.mp3');
const Emoji = require('./11 Emoji.mp3');
const Outro = require('./12 Outro.mp3');

function AlbumNepal() {

    const AdiosCover = CoverNepal;

    let Nuits = [{
            Track : 1,
            Title : 'Faute de Time',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: FauteDeTime,
            Duration : FauteDeTime.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 2,
            Title : 'Oxmose',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: Oxmose,
            Duration : Oxmose.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 3,
            Title : 'Rien d\'Spécial',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: RiendSpecial,
            Duration : RiendSpecial.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 4,
            Title : '444 Nuits',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: nuits,
            Duration : nuits.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 5,
            Title : 'YOLO',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: YOLO,
            Duration : YOLO.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 6,
            Title : 'Malik Al Mawt',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: MalikAlMawt,
            Duration : MalikAlMawt.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 7,
            Title : 'Laisse Rouler',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: LaisseRouler,
            Duration : LaisseRouler.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 8,
            Title : 'Overdab ft. Fixpen Sill & Waltmann',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: Overdab,
            Duration : Overdab.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 9,
            Title : 'Bizarre City ft. M le Maudit',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: BizarreCity,
            Duration : BizarreCity.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 10,
            Title : 'Suga Suga ft. Doums',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: SugaSuga,
            Duration : SugaSuga.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 11,
            Title : 'Emoji',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: Emoji,
            Duration : Emoji.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 12,
            Title : 'Outro',
            Artist : 'Nepal',
            Album : '444 Nuits',
            Source: Outro,
            Duration : Outro.metadata.duration,
            Cover : AdiosCover,
        }
    ]

    return(
         Nuits
    )
}

export default AlbumNepal