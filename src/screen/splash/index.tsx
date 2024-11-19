import {Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles'
import {useNavigation} from '@react-navigation/native';
import { icon } from '../../assets';
import { screen } from '../../navigation/screen';

// import screen from '../../navigation/screen';
// import { useDispatch, useSelector } from 'react-redux';
// import {Tutorial} from '../../redux/slices/userdata';

export function Splash() {
  const navigation  = useNavigation()
  const NValue = useState(new Animated.Value(0))[0];
  const EValue = useState(new Animated.Value(0))[0];
  const TValue = useState(new Animated.Value(0))[0];
  const MValue = useState(new Animated.Value(0))[0];
  const dot = useState(new Animated.Value(0))[0];
  // const dispatch = useDispatch()
  // const {tutorial,email} = useSelector((state) => state.userdata)

  function moveImage() {
    Animated.timing(NValue, {toValue: 1,duration: 500,useNativeDriver: true,}).start();
    Animated.timing(EValue, {toValue: 1,duration: 2000,useNativeDriver: true,}).start();
    Animated.timing(TValue, {toValue: 1,duration: 2500,useNativeDriver: true,}).start();
    Animated.timing(MValue, {toValue: 1,duration: 3000,useNativeDriver: false,}).start();
    }
  function moveText() {
    Animated.timing(dot, {toValue: 5,duration: 6000,useNativeDriver: false,}).start();
  }

  useEffect(() => {
    moveImage();
    moveText();
    setTimeout(() => {
      navigation.reset({
        index : 0,
        routes:[{name  : screen.BotttomNavigation}]
      })
    }, 2500);
    // dispatch(Tutorial())
    // console.log('Screen',tutorial)
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Animated.Image source={icon.icon} style={[styles.image,{opacity:NValue}]}/>
      <Animated.View style={{flexDirection:'row'}}>
          <Animated.Text style={[styles.text,{opacity:NValue}]}>  E</Animated.Text>
          <Animated.Text style={[styles.text,{opacity:EValue}]}>x</Animated.Text>
          <Animated.Text style={[styles.text,{opacity:MValue}]}>p</Animated.Text>
          <Animated.Text style={[styles.text,{opacity:TValue}]}>e</Animated.Text>
          <Animated.Text style={[styles.text,{opacity:EValue}]}>n</Animated.Text>
          <Animated.Text style={[styles.text,{opacity:MValue}]}>s</Animated.Text>
          <Animated.Text style={[styles.text,{opacity:TValue}]}>e</Animated.Text>
      </Animated.View>
    </Animated.View>
  )
}

export default Splash;

