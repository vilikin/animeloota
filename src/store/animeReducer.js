// Initial state of the app, contains just an array of some good anime shows
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

// TODO: Action for adding an anime
// TODO: Actions for increasing and decreasing season/episode

export default (state = defaultState, action) => {
    // Because state is immutable, we need to make copy of the original state before modifying anything
    let animes = [...state];

    // Depending on the action type, do something...
    switch (action.type) {
        // TODO: Reducers
        default:
            return animes;
    }
}
