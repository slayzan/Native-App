import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


const items =[
  {
    id: 1,
    name:"video-camera",
    title:"New Meting",
    customColor:"#FF751F"
  },
  {
    id: 2,
    name:"plus-square",
    title:"Join",
  },
  {
    id: 3,
    name:"calendar",
    title:"Schedule",
  },
  {
    id: 4,
    name:"upload",
    title:"Share Screen",
  }
]
const MenuButton = () => {
  return <View style={styles.container}>
    
    {items.map((item, index) =>
        <View  key={index} style={styles.buttonContainer}>
        <TouchableOpacity style={{...styles.button, backgroundColor: item.customColor ? item.customColor : "#0470DC"}}>
          <FontAwesome name={item.name} size={23} color={"#efefef"} />
        </TouchableOpacity>
        <Text style={styles.menuText}>{item.title}</Text>
      </View>
    )}

  </View>;
};

export default MenuButton;

const styles = StyleSheet.create({
  container:{
    marginTop:25,
    paddingBottom:10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  buttonContainer:{
    alignItems: 'center',
    flex:1,
  },
  button:{
    width:50,
    height:50,
    backgroundColor:"blue",
    borderRadius:15,
    justifyContent: "center",
    alignItems: "center"
  },
  menuText:{
    color:"#858585",
    fontSize:12,
    paddingTop:5,
    fontWeight:"600",
  }
})
