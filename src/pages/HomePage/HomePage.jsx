import { useState, useEffect } from "react"
import { Container, Form } from "semantic-ui-react"
import "./HomePage.css";
import userService from "../../utils/userService";
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: 'a0835d46e0754956858c9536a80bb23a',
})
//renders a search bar where viewers and users can search music using spotify without having spotify API interfere with jwt authentication/authorization
export default function HomePage({ props }) {
    const clientCred = userService(props)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)
    useEffect(() => {
        if (!clientCred) return
        spotifyApi.setClientCred(clientCred)
    }, [clientCred])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!clientCred) return

        spotifyApi.searchSongs(search).then(res => {
            setSearchResults(res.body.songs.items.map(song => {
                
                const smallestAlbumImage = song.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, song.ablum.images[0])
                return {
                    artist: song.artists[0].name,
                    title: song.title,
                    uri: song.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })
    }, [search, clientCred])

    return (
    <Container className="d-flex flex-column py-2" style={{height: "100vh"}}>
        <Form.Control
         type="search" 
         placeholder="Search Songs/Artists" 
         value={search} 
         onChange={e => setSearch(e.target.value)}
         />
         <div 
         className="flex-grow-1 my-2" 
         style={{ overFlowY: "auto" }}>
             Songs
             </div>
    </Container>
  )
}
