import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { useSelector } from 'react-redux';

const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

const Insight = () => {
  const {expensechart,incomechart} = useSelector(state => state.expenses)
  console.log(expensechart)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Insight</Text>
      <View style={styles.chartContainer}>
      <BarChart data = {expensechart} />
      <Text>Expense Chart</Text>
      </View>

      <View style={styles.chartContainer}>
      <BarChart data = {incomechart} />
      <Text>Income Chart</Text>
      </View>

    </SafeAreaView>
  )
}

export default Insight

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'grey'
  },
  chartContainer:{
    alignItems:'center',
    marginVertical:20,
  },
  title:{
    fontSize:35,
    textAlign:'center',
    marginVertical:20
  }
})