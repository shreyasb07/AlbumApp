import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

//Make a component
class AlbumList extends Component{
  state = { albums: [] };


  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) =>{
        this.setState({albums: responseData});
      })
  }

  renderAlbums(){
    return this.state.albums.map(album =>
    <AlbumDetail key = {album.title} album = {album}/>
    );
  }


  render(){
    console.log(this.state);
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
  
}

//Style the component


//export the component to be used elsewhere in the App

export default AlbumList;