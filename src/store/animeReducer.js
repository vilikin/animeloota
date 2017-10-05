const defaultState = [
    {
        id: 1,
        name: "Umaruma",
        picture: "https://vignette.wikia.nocookie.net/cardfight/images/c/cf/Himouto_umaru-chan.gif/revision/latest?cb=20150929034717",
        description: "Mun lempi sarja. t. Toni",
        season: 1,
        episode: 3
    },
    {
        id: 2,
        name: "Naruto",
        picture: "http://img1.ak.crunchyroll.com/i/spire1/3011e12b3395d39a18379d9e9fdc30671502581680_full.jpg",
        description: "Mun lempi sarja. t. Vili",
        season: 1,
        episode: 3
    }
];

export const ADD_ANIME = "ADD_ANIME";

export const addAnime = (name, description, picture) => ({
    type: ADD_ANIME,
    payload: {
        name,
        description,
        picture
    }
});

export const INCREASE = "INCREASE";

export const increase = (id, type) => ({
    type: INCREASE,
    payload: {
        id,
        type
    }
});

export const DECREASE = "DECREASE";

export const decrease = (id, type) => ({
    type: DECREASE,
    payload: {
        id,
        type
    }
});

export default (state = defaultState, action) => {
    let animes = [...state];
    let anime;

    switch (action.type) {
        case ADD_ANIME:
            anime = {
                ...action.payload,
                season: 1,
                episode: 1,
                picture: action.payload.picture ? action.payload.picture : "https://haltu.fi/site/gallery/2/DSC_1494.jpg",
                id: animes[animes.length - 1].id + 1
            };

            animes.push(anime);
            break;
        case INCREASE:
            animes = animes.map(anime => {
                if (anime.id === action.payload.id && anime.hasOwnProperty(action.payload.type)) {
                    anime[action.payload.type]++;
                }

                return anime;
            });

            break;
        case DECREASE:
            animes = animes.map(anime => {
                if (anime.id === action.payload.id && anime.hasOwnProperty(action.payload.type)) {
                    anime[action.payload.type]--;
                }

                return anime;
            });

            break;
    }

    return animes;
}
