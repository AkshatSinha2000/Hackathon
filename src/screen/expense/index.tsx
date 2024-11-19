import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Form from '../../components/Form';
import {useSelector} from 'react-redux';
import Flatlist from '../../components/Flatlist';

const Expenses = () => {
  const {expenses} = useSelector(state => state.expenses);
  return (
    <SafeAreaView style={styles.safeareaview}>
      <Form income={false} expenses={true} />
      <Flatlist data={[...expenses]} expenses={true}/>
    </SafeAreaView>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  safeareaview : {flex:1,backgroundColor:'grey'}
});
