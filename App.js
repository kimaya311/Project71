import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './Screens/ReadStoryScreen';
import WriteStoryScreen from './Screens/WriteStoryScreen';
export default function App() {
  return (
    
        <AppContainer/>
   
  );
}
const tabNavigator=createBottomTabNavigator({
  WriteStory:{screen:WriteStoryScreen},
  ReadStory:{screen:ReadStoryScreen}},
  {defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==='WriteStory'){
        return(
          <Image style={{width:30,height:20}} source={require('./PROImages/write.png')}/>
        )
      }
      else if(routeName==='ReadStory'){
        return(
          <Image style={{width:30,height:20}} source={require('./PROImages/read.png')}/>
        )
      }
    }
  })
  
  });
const AppContainer=createAppContainer(tabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
