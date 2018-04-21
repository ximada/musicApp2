export default function saveNewListAction(newListBundle){

    console.log(newListBundle)
    let parts = newListBundle.split("_");
    let name = parts[0];
    let urlimg = parts[1];
    let newPlaylist = [name, {urlimg: urlimg, owner: "", songs: {}}]

    return {type: "SAVE_NEW_LIST", payload: newPlaylist}
}