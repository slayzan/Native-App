import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {
  return <View style={styles.container}>
    <Entypo name="notification" size={30} color={"#efefef"}/>
    <Text style={styles.heading}>Meet & Chat</Text>
    <Entypo name="new-message" size={30} color={"#efefef"}/>

  </View>;
};

export default Header;

const styles = StyleSheet.create({
   container:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical:10,
    
  },
   heading:{
     color: "#efefef",
     fontSize: 20,
     fontWeight: "700"
   }
})
