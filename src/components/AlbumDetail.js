import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button';


//Make a Component
const AlbumDetail = (props)=>{
  return(
    <Card>
      {/*  */}
      <CardSection>
        <View style = {styles.thumbnailContainerStyle}>
          <Image
           style = {styles.thumbnailStyles}
           source = {{uri: props.album.thumbnail_image}}/>
        </View>
        <View style = {styles.headerContentStyle}>
          <Text style = {styles.headerTextStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
        
      </CardSection>

      {/*  */}
      <CardSection>
          <Image 
          style = {styles.imageStyle}
          source= {{uri: props.album.image}}/>
      </CardSection>

      {/*  */}
      <CardSection>
        <Button 
        onPress = {()=> Linking.openURL(props.album.url)}>
        Buy Now!
        </Button>
      </CardSection>
      
    </Card>
  );
  
}

//Style
const styles = StyleSheet.create({
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle:{
    fontSize: 18,
  },
  thumbnailStyles:{
    height: 50,
    width: 50,

  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    width: null,
    flex: 1,
  }
})

//export component

export default AlbumDetail;