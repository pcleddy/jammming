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
      playlistTracks: [
        { id: 4, name: 'D_name', artist: 'D_artist', album: 'D_album'},
      ],
      playlistName: 'my plist'
    }
    this.addTrack = this.addTrack.bind(this);

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar component />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} />
          </div>
        </div>
        <h1>END</h1>
      </div>
    );
  }

  addTrack(track) {
  //   let existing_track_ids = this.state.playlistTracks.map( track => track.id );
  //   if ( existing_track_ids.includes(track.id) ) {
  //     this.state.playlistTracks.push(track);
  //     console.log(this.state.playlistTracks)
  //     this.setState( {playlistTracks: this.state.playlistTracks} )
  //     console.log('Found it!')
  //     console.log(this.state.playlistTracks)
  //   } else {
  //     console.log('Not found')
  //     console.log(this.state.playlistTracks)
  //   }
  // }
    if ( this.state.playlistTracks.find( m_track => m_track.id === track.id ) ) {
      this.state.playlistTracks.push(track);
      console.log(this.state.playlistTracks)
      this.setState( {playlistTracks: this.state.playlistTracks} )
      console.log('Found it!')
      console.log(this.state.playlistTracks)
    } else {
      console.log('Not found')
      console.log(this.state.playlistTracks)
    }
  }
}

export default App;
