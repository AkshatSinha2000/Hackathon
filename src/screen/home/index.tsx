import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Topbar from '../../components/Topbar'
import color from '../../utils/color'
import { useSelector } from 'react-redux'
import Flatlist from '../../components/Flatlist'

const Home = () => {
  const {income,expenses,totalexpenses,totalincome} = useSelector(state => state.expenses)
  console.log('totalexpenses',totalexpenses)
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Topbar/>

      <View style={styles.maincontainer}>
        <View style={styles.moneyContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.cashin}>{totalincome}</Text>
            <Text style={styles.text}>Cash in</Text>
          </View>
          <View style={styles.priceContainer}>
          <Text style={styles.totalcash}>{totalincome - totalexpenses}</Text>
          <Text style={styles.text}>Total</Text>
          </View>
          <View style={styles.priceContainer}>
          <Text style={styles.cashout}>{totalexpenses}</Text>
          <Text style={styles.text}>Cash out</Text>
          </View>
        </View>

        <View style={styles.cashoutcontainer}>
        <Text style={styles.cashtext}>
          Cash out
        </Text>
      <Flatlist data = {expenses} expenses = {true}/>

        </View>

        <View style={styles.cashoutcontainer}>

      <Text style={styles.cashtext}>
          Cash in
        </Text>
      <Flatlist data = {income} expenses = {false}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeAreaView:{
    backgroundColor:color.black,
    flex:1,
  },
  moneyContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginBottom:30,
  },
  priceContainer:{
    alignItems:'center',
  },
  cashin:{
    fontSize:22,
    color:color.lightgreen
  },
  cashout:{
    fontSize:22,
    color:color.red,
  },
  totalcash:{
    fontSize:55,
    color:color.white
  },
  maincontainer:{
    flex:1,
    paddingTop:40
  },
  text:{
    color:color.white
  },
  cashoutcontainer : {height:'50%',paddingVertical:20},
  cashtext : {textAlign:'center',fontSize:20,marginBottom:10,color:color.white,fontWeight:'bold',backgroundColor:'grey'}

    
})