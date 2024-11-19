import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icon } from '../../assets';
import { Image, Text } from 'react-native';
import Home from '../../screen/home';
import { screen } from '../screen';
import color from '../../utils/color';
import Expenses from '../../screen/expense';
import Income from '../../screen/income';
import Insight from '../../screen/insight';


const Tab = createBottomTabNavigator();
const BotttomNavigation = ()=> {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, size}) => {
        let iconName;
        let tintColor;
        let height;
        let width;

        if (route.name === screen.Expenses) {
          height = 25
          width =25
          iconName = icon.expenses
          if (focused) {
            tintColor = color.bottomtab
          } else {
            tintColor = color.white
          }
        }
        if (route.name === screen.Home) {
          height = 23,
          width = 23,
          iconName = icon.home
          if (focused) {
            tintColor = color.bottomtab
          } else {
            tintColor = color.white
          }
        }
        if (route.name === screen.Income) {
          height = 26,
          width = 26,
          iconName = icon.income
          if (focused) {
            tintColor = color.bottomtab
          } else {
            tintColor = color.white
          }
        }
        if (route.name === screen.Insight) {
          height = 25,
          width = 25,
          iconName = icon.insight
          if (focused) {
            tintColor = color.bottomtab
          } else {
            tintColor = color.white
          }
        }
        
        return <Image source={iconName} style={{tintColor,resizeMode:'contain',height,width}} />
      },
      tabBarLabel : ({focused})=>{
        if(route.name === screen.Expenses){
          return <Text style={{color:focused ? color.bottomtab : color.white,fontSize:10,fontWeight:'bold'}}>EXPENSES</Text>
       }
       if(route.name === screen.Home){
        return <Text style={{color:focused ? color.bottomtab : color.white,fontSize:10,fontWeight:'bold'}}>HOME</Text>
      }
      if(route.name === screen.Income){
        return <Text style={{color:focused ? color.bottomtab : color.white,fontSize:10,fontWeight:'bold'}}>INCOME</Text>
      }
      if(route.name === screen.Insight){
        return <Text style={{color:focused ? color.bottomtab : color.white,fontSize:10,fontWeight:'bold'}}>INSIGHT</Text>
      }
      },
        tabBarStyle:{backgroundColor:color.black}
    })}
    >
      <Tab.Screen name={screen.Home} component={Home} options={{headerShown :false}}/>
      <Tab.Screen name={screen.Expenses} component={Expenses} options={{headerShown :false}}/>
      <Tab.Screen name={screen.Income} component={Income} options={{headerShown :false}}/>
      <Tab.Screen name={screen.Insight} component={Insight} options={{headerShown :false}}/>
    </Tab.Navigator>
  );
}
export default BotttomNavigation;