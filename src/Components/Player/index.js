import React from 'react';
import PlayerDetails from '../PlayerDetails/index';

const Player = (props) => {
    return (
        <div className='c-player'>
            <audio></audio>
            <h4>Tocando agora:</h4>
            <p>{props.song.title} by {props.song.artist}</p>
            {/*Detalhes */}
            <PlayerDetails song={props.song}></PlayerDetails>
            {/*Controles */}
            <p><strong>
                Next up: 
                </strong>
                {props.nextSongIndex.title} by {props.nextSongIndex.artist}
            </p>
            
        </div>
    )
}

export default Player