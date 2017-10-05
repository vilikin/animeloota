import React from 'react';

class AnimeView extends React.Component {
    render() {
        const id = this.props.match.params.id;

        return <div>
            This is an anime {animeId}
        </div>
    }
}

export default AnimeView;
