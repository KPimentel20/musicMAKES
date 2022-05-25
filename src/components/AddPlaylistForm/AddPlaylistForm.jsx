//adding the song cards to the playlist card
import React from 'react';
import { Card, Segment, Image  } from 'semantic-ui-react'
import PlaylistCard from '../PlaylistCard/PlaylistCard';


export default function PlaylistFeed({songs, numPhotosCol, addSong, removeSong, user }){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
          <Segment>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        {songs.map((song) => {
          return (
            <PlaylistCard
              song={song}
              addSong={addSong}
              removeSong={removeSong}
              user={user}
            />
          );
        })}
      </Card.Group>
  
    )
}