// import playlist from "../../models/playlist"
// import tokenService from "./tokenService"

// const BASE_URL = '/api'

// export function create(playlistId){
// 	return fetch(`${BASE_URL}/playlists/${playlistId}/songs`, {
// 		method: 'POST',
// 		headers: {
// 			'Authorization': 'Bearer ' + tokenService.getToken(),
//             'Content-Type': 'application/json'
// 		  }
// 	}).then(res => {
// 		if(res.ok) return res.json()
// 		throw new Error('Not logged In! Check Express terminal')
// 	})
// }

// export function removeSong(songsId){
// 	return fetch(`${BASE_URL}/likes/${songsId}`, {
// 		method: 'DELETE',
// 		headers: {
// 			'Authorization': 'Bearer ' + tokenService.getToken(),
//             'Content-Type': 'application/json'
// 		  }
// 	}).then(res => {
// 		if(res.ok) return res.json()
// 		throw new Error('Not logged In! Check Express terminal')
// 	})
// }