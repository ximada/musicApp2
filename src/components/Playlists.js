import React, { Component } from 'react';
import SonglistAdd from './SonglistAdd'
import NewSong from './newSong'

export default class PlayList extends Component {
  constructor(){
    super();
    this.paintSongs = this.paintSongs.bind(this);
  }
  paintSongs(song){
    return <NewSong  key={song} songKey={song} allSongs={this.props.songs}/>
  }
  render() {
    return (
      <div className="col-lg-12 container-songs" id="contsongs"> 
        <div className="col-lg-12 songs-style p-2 " key={this.props.index}>
        <div className="title-song">
          <img className="p-2" src={this.props.img} alt="image" />        
          <h3 className="d-inline " >{this.props.name}</h3>
        </div>
        <SonglistAdd index={this.props.index}/>
      </div>
      <div>
          {Object.keys(this.props.songs).map(this.paintSongs)}
      </div>
    </div> 
    )
  }
}