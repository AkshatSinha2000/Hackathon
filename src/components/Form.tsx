import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import color from '../utils/color';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {icon} from '../assets';
import {useDispatch} from 'react-redux';
import {Addexpenses, Addincome} from '../redux/slices/handleexpenses';
import text from '../utils/text';

const Form = ({income, expenses}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('12/12/2000');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('No Category');
  const [opencategory, setOpen] = useState(false);
  const dispatch = useDispatch();

  const data = expenses
    ? [
        {name: 'Foods', id: '1'},
        {name: 'Transport', id: '2'},
        {name: 'Shopping', id: '3'},
        {name: 'Family', id: '4'},
      ]
    : [
        {name: 'Salary', id: '1'},
        {name: 'Investment', id: '2'},
        {name: 'Part-Time', id: '3'},
        {name: 'Bonus', id: '4'},
      ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    setDate(formattedDate);
    hideDatePicker();
  };

  const renderItem = item => {
    // console.log(item.item.name)
    return (
      <TouchableOpacity
        onPress={() => [setOpen(false), setCategory(item.item.name)]}
        style={styles.flatlistbutton}>
        <Text style={styles.flatlistImage}>{item.item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.inputcontainer}>
        <Text style={styles.lable}>{text.Amount}</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setAmount(text)}></TextInput>
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.lable}>{text.Category}</Text>
        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => setOpen(!opencategory)}>
          <Text style={styles.submittext}>{category}</Text>

          <TouchableOpacity onPress={() => setOpen(!opencategory)}>
            <Image source={icon.downarrow} style={styles.downimage} />
          </TouchableOpacity>
        </TouchableOpacity>
        {opencategory && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.flatlist}
          />
        )}
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.lable}>{text.Date}</Text>
        <View style={styles.calender}>
          <Text style={styles.calenderDate}>{date}</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <Image source={icon.calender} style={styles.imagecalender} />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.submitbutton}
        onPress={
          expenses
            ? () =>
                dispatch(
                  Addexpenses({
                    amount,
                    date,
                    category,
                    id: Math.random() * 100,
                  }),
                )
            : () =>
                dispatch(
                  Addincome({amount, date, category, id: Math.random() * 100}),
                )
        }>
        <Text style={styles.submittext}>{text.Submit}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: color.black,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  inputcontainer: {
    marginBottom: 30,
  },
  lable: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.white,
  },
  textinput: {
    borderBottomWidth: 1,
    borderBottomColor: color.white,
    // marginTop:10,
    color: color.white,
    paddingVertical: 10,
  },
  submitbutton: {
    backgroundColor: color.blue,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  submittext: {
    color: color.white,
    fontWeight: 'bold',
  },
  calender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagecalender: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  calenderDate: {
    fontSize: 12,
    color: color.white,
  },
  downimage: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    tintColor: color.white,
  },
  flatlistImage: {
    color: color.black,
    paddingVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: color.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  flatlist: {
    backgroundColor: color.white,
    marginTop: 5,
    borderRadius: 10,
  },
  flatlistbutton: {
    paddingHorizontal: 20,
  },
});
