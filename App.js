import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component{
  render(){
    let{image}=this.state;
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'
    }}>
      <Button title='Pick An Image From Camera Roll'
      onPress={this._pickImage}/>
    </View>
    //<PickImage/>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
