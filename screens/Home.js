import React from 'react';
import {StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButton from '../components/MenuButton';
import ContactMenu from '../components/ContactMenu';


const Home = () => {
  return (
    <View style={styles.container}>
         <Header />
         <SearchBar />
         <MenuButton />
         <ContactMenu />  
    </View>
  ); 
}


export default Home;

const styles = StyleSheet.create({
  container:{
      
      padding: 15,
  }
})
