import React from 'react';
import GameCard from './GameCard';

export default function GamesList({ games }) {
    const emptyMassage = (
        <p>There are no games yet in your collection.</p>
    );

    const gameList = (
        <div className="ui four cards">
            { games.map(game => <GameCard game={game} key={game._id} />) }
        </div>
    );

    return (
        <div>
            {games.length === 0 ? emptyMassage : gameList }
        </div>
    );
}

GamesList.propTypes = {
    games: React.PropTypes.array.isRequired
}


