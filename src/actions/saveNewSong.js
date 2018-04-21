export default function saveNewSong(newSongBundle){
    let partsSong = newSongBundle.split("_");
    let newSongArray= [ partsSong[3], {artist: partsSong[1], album:  partsSong[2], title:  partsSong[0]}]
    return {type: "SAVE_NEW_SONG", payload: newSongArray}
}