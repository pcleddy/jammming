import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'A_name', artist: 'A_artist', album: 'A_album'},
        { name: 'B_name', artist: 'B_artist', album: 'B_album'},
        { name: 'C_name', artist: 'C_artist', album: 'C_album'},
      ],
      playlistTracks: [
        { name: 'D_name', artist: 'D_artist', album: 'D_album'},        
      ],
      playlistName: 'my plist'
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar component />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} />
          </div>
        </div>
        <h1>END</h1>
      </div>
    );
  }
}

export default App;
