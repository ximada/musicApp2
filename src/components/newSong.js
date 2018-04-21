import React, { Component } from 'react';

export default class newSong extends Component {
    render() {
      let songKey = this.props.songKey
      let songObject = this.props.allSongs[songKey]
      return (
        <div className="song">
        <span>{songObject.title} + {songObject.artist} +{songObject.album}</span>
        </div>
      )
    }
  }
  