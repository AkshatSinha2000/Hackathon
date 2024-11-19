import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Form from '../../components/Form';
import {useSelector} from 'react-redux';
import Flatlist from '../../components/Flatlist';

const Income = () => {
  const {income} = useSelector(state => state.expenses);
  console.log('income', income);
  return (
    <SafeAreaView style={styles.safeareaview}>
      <Form income={true} expenses={false} />
      <Flatlist data={[...income]} expenses={false} />
    </SafeAreaView>
  );
};

export default Income;

const styles = StyleSheet.create({
  safeareaview : {flex:1,backgroundColor:'grey'}
});
