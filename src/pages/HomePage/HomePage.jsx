import React, { useState, useEffect } from "react";

import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import AddSongsForm from "../../components/AddSongsForm/AddSongsForm";
import AddPlaylistForm from "../../components/AddPlaylistForm/AddPlaylistForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import * as songsAPI from "../../utils/songsApi";
import * as playlistsAPI from '../../utils/playlistsApi';



import { Grid } from "semantic-ui-react";

export default function Feed({user}) {
  console.log(playlistsAPI, " <-- playlistsAPI")
  const [playlists, setPlaylists] = useState([]); 
  const [error, setError] = useState("");


  async function addSong(playlistId){
    try { 
      const data = await songsAPI.create(playlistId)
      console.log(data, ' <- the response from the server when we make a song');
      getPlaylists(); 
    } catch(err){
      console.log(err)
      setError(err.message)
    }
  }

  async function removeSong(playlistId){
    try {
      const data = await songsAPI.removeSong(playlistId);
      console.log(data, '<-  this is the response from the server when we remove a song')
      getPlaylists()
    } catch(err){
      console.log(err);
      setError(err.message);
    }
  }


  async function handleAddPlaylist(playlist) {
    try {
      const data = await playlistsAPI.create(playlist); 
      console.log(data, " this is response from the server, in handleAddPost");
      setPlaylists([data.playlist, ...playlists]);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function getPlaylists() {
    try {
      const data = await playlistsAPI.getAll();
      console.log(data, " this is data,");
      setPlaylists([...data.playlists]);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
    
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  if (error) {
    return (
      <>
        <ErrorMessage error={error} />;
      </>
    );
  }
//playlist are posts
//songs are likes
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddPlaylistForm handleAddPlaylist={handleAddPlaylist} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <PlaylistCard
            playlists={playlists}
            numPhotosCol={1}
            addSongs={addSong}
            removeSongs={removeSong}
            user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
