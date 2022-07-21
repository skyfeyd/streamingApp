import React from 'react'

import AdiosCover from './picture/CoverNepal.jpg'

const Opening = require('./Opening.mp3');
const EnemisPt2 = require('./EnemisPt2.mp3');
const EnFace = require('./EnFace.mp3');
const Trajectoire = require('./Trajectoire.mp3');
const Vibe = require('./Vibe.mp3');
const Lemonade = require('./Lemonade.mp3');
const LàBas = require('./Là-bas.mp3');
const Sundance = require('./Sundance.mp3');
const Millionnaire = require('./Millionnaire.mp3');
const SansVoir = require('./SansVoir.mp3');
const Crossfader = require('./Crossfader.mp3');
const Daruma = require('./Daruma.mp3');

const AdiosBahamas = () => {
    const AdiosBahamas = [
        {
            Track : 1,
            Title : 'Opening',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: Opening,
            Duration : Opening.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 2,
            Title : 'Enemis, Pt2',
            Artist : 'Nepal Di-meh',
            Album : 'Adios Bahamas',
            Source: EnemisPt2,
            Duration : EnemisPt2.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 3,
            Title : 'En Face',
            Artist : 'Nepal Nekfeu',
            Album : 'Adios Bahamas',
            Source: EnFace,
            Duration : EnFace.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 4,
            Title : 'Trajectoire',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: Trajectoire,
            Duration : Trajectoire.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 5,
            Title : 'Vibe',
            Artist : 'Nepal Sheldon',
            Album : 'Adios Bahamas',
            Source: Vibe,
            Duration : Vibe.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 6,
            Title : 'Lemonade',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: Lemonade,
            Duration : Lemonade.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 7,
            Title : 'Là Bas',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: LàBas,
            Duration : LàBas.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 8,
            Title : 'Sundance',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: Sundance,
            Duration : Sundance.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 9,
            Title : 'Millionnaire',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: Millionnaire,
            Duration : Millionnaire.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 10,
            Title : 'Sans Voir',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: SansVoir,
            Duration : SansVoir.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 11,
            Title : 'Crossfader',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: Crossfader,
            Duration : Crossfader.metadata.duration,
            Cover : AdiosCover,
        },
        {
            Track : 12,
            Title : 'Daruma',
            Artist : 'Nepal',
            Album : 'Adios Bahamas',
            Source: Daruma,
            Duration : Daruma.metadata.duration,
            Cover : AdiosCover,
        }
    ]

    return(
        AdiosBahamas
    )
}


