import React, { Component } from 'react';
import NavBar from './components/navbar';
import CreatePlayList from './components/createPlaylist';
import Playlists from './components/Playlists';
import PaintAllPlaylists from './components/PaintAllPlaylists';
import Footer from "./components/footer";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id= "fullcont" className="container-fluid">
        <NavBar />
        <div className="row">
          <CreatePlayList/>
          <PaintAllPlaylists/>        
        </div> 
        <Footer />
      </div>
    );
  }
}


