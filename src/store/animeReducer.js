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

export default (state = defaultState, action) => {
    let animes = [...state];

    switch (action.type) {
        case ADD_ANIME:
            const anime = {
                ...action.payload,
                season: 1,
                episode: 1,
                id: animes[animes.length - 1].id + 1
            };

            animes.push(anime);
    }

    return animes;
}
