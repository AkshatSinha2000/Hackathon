import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icon } from '../assets'

const Topbar = () => {
  return (
    <View style={styles.topbarContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={icon.icon}/>
      </View>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({
  image:{
    height:60,
    width:60,
    borderRadius:100,

  },
  imageContainer:{
    
  },
  topbarContainer:{
    // backgroundColor:'red',
    alignSelf:'baseline',
    paddingHorizontal:20,
    paddingVertical:20,
  }
})