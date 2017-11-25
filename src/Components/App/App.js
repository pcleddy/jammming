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
        { id: 1, name: 'A_name', artist: 'A_artist', album: 'A_album'},
        { id: 2, name: 'B_name', artist: 'B_artist', album: 'B_album'},
        { id: 3, name: 'C_name', artist: 'C_artist', album: 'C_album'},
      ],
      playlistTracks: [],
      playlistName: 'my plist'
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar component />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} onRemove={this.removeTrack} />
          </div>
        </div>
        <h1>END</h1>
      </div>
    );
  }

  addTrack(track) {
    if ( this.state.playlistTracks.find( m_track => m_track.id === track.id ) === undefined ) {
      let tmp = this.state.playlistTracks;
      tmp.push(track);
      this.setState( {playlistTracks: tmp} )
      console.log('Found it!')
    }
  }

  removeTrack(track) {
    let tmp = this.state.playlistTracks.filter( m_track => m_track.id !== track.id );
    console.log('Remove it!')
    this.setState( {playlistTracks: tmp} )
  }

} // END App




export default App;
