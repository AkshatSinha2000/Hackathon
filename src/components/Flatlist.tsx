import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../utils/color';
import {useDispatch} from 'react-redux';
import {DeleteExpenses, DeleteIncome} from '../redux/slices/handleexpenses';

const Flatlist = ({data, expenses, ...props}) => {
  const dispatch = useDispatch();
  const renderitem = item => {
    return (
      <View style={styles.flatlistcontainer}>
        <View style={styles.datecontainer}>
          <Text style={styles.date}>{item.item.category}</Text>
          <Text style={styles.date}>{item.item.date}</Text>
        </View>
        <Text style={styles.amount}>${item.item.amount}</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonDelete}
            onPress={() =>
              expenses
                ? dispatch(DeleteExpenses(item.item.id))
                : dispatch(DeleteIncome(item.item.id))
            }>
            <Text style={styles.text}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonUpdate}>
            <Text style={styles.text}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    

      <FlatList
        data={data}
        renderItem={renderitem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        bounces={false}
        {...props}
        />
     
    
  );
};

export default Flatlist;

const styles = StyleSheet.create({
  flatlistcontainer: {
    borderWidth: 1,
    borderColor: color.white,
    backgroundColor: color.black,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  datecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonDelete: {
    backgroundColor: color.red,
    padding: 10,
    borderRadius: 10,
  },
  buttonUpdate: {
    backgroundColor: color.blue,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  text: {
    color: color.white,
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
    color: color.white,
  },
  amount: {
    color: color.lightgreen,
    fontWeight: 'bold',
  },
});
