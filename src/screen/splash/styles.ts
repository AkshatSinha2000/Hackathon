import { StyleSheet } from "react-native";
import color from "../../utils/color";

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:color.black,
  },
  image:{
    height:150,
    width:150,
    borderRadius:100,   
  },
  text:{
     fontSize:34,
     color:'white',
     fontWeight:'700',
    //  fontFamily:family.MavenProBold,
     marginHorizontal:2,
  },
});
export default styles;
