let initialState = {
  playlists: {
    one: {
      owner: "",
      urlimg:
        "https://blog.missguided.co.uk/wp-content/uploads/2015/01/elsmix.gif",
      songs: {
        Westcoast: {
          artist: "Lana",
          album: "Who",
          title: "Cares"
        }
      }
    }
  }
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_NEW_LIST":
      let name = action.payload[0];
      return { playlists: { ...state.playlists, [name]: action.payload[1] } };
    case "SAVE_NEW_SONG":
      let copySelectedPlaylist = state.playlists[action.payload[0]];
      let songObject = action.payload[1];
      let copyPlaylistWithSongObject = copySelectedPlaylist.songs;
      copyPlaylistWithSongObject[songObject.title] = songObject;
      return { ...state, copySelectedPlaylist: copyPlaylistWithSongObject };
      return state;
    case "REMOVE_SONG":
      return state;
    default:
      return state;
  }
}
