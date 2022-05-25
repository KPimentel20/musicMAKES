//holds all songs
import React from "react";
import { Card, Image } from "semantic-ui-react";

function PlaylistCard({ playlist, removeSong, addSong, user }) {

  const songIndex = playlist.songs.findIndex(
    (song) => song.username === user.username
  );

  const clickHandler =
    songIndex > -1
      ? () => removeSong(playlist.songs[songIndex]._id)
      : () => addSong(playlist._id);

  return (
    <Card key={playlist._id} raised> 
        <Card.Content textAlign="left">
          <Card.Header>
            <Image
              size="large"
              src={
                playlist.user.songUrl
                  ? playlist.user.songUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
            />
          </Card.Header>
        </Card.Content>
      )
      <Card.Content>
        <Card.Description>{playlist.title}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"} onClick={clickHandler}>
        {playlist.songs.length} Songs
      </Card.Content>
    </Card>
  );
}

export default PlaylistCard;
