import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";

const Searchbar = () => {
  return <View style={styles.container}>
      <Fontisto name='search' size={20} color={"#858585"}/>
      <Text style={styles.TextSearchBar}>Search</Text>
  </View>;
};

export default Searchbar;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#333333',
    display:'flex',
    flexDirection:'row',
    paddingHorizontal:10,
    height:40,
    alignItems:'center',
    borderRadius:10,
    marginTop:10,
  },
  TextSearchBar:{
    color:'#858585',
    paddingLeft:10,
    fontSize:20,
  }
})