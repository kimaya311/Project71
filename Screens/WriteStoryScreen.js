import * as React from 'react'
import {Header} from 'react-native-elements'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import db from '../config'
import firebase from 'firebase'
export default class WriteStoryScreen extends React.Component{
constructor(){
  super();
  this.state={
    title:"",
    author:"",
    story:""
  }
}
submitStory = async ()=>{
  db.collection('Stories').doc('ST01').update({
    'story':this.state.story,
    'title': this.state.title,
    'author':this.state.author
})
}

  render(){
    return (
        <View>
          <Header
          backgroundColor={'peach'}
          centerComponent={{
            text: 'STORYTIME!',
            style: { color: 'blue', fontSize: 20 },
          }}
        />
    <TextInput style={styles.inputBox} placeholder='Story Title' 
     onChangeText={(text)=>{
      this.setState({
        title: text
      })}}/>
    <TextInput style={styles.inputBox} placeholder='Author Name'
      onChangeText={(text)=>{
      this.setState({
        author: text
        })}}/>
    <TextInput style={styles.inputBox} multiline={true} placeholder='Write Story'
    onChangeText={(text)=>{
      this.setState({
        story: text
        })}}/>
    <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
        <Text style={styles.displayText}>
        Submit
        </Text> 
    </TouchableOpacity>
    
        </View>
    )
    }
};

const styles=StyleSheet.create({
    inputBox: {
        width:500,
        height:40,
        fontSize:20,
        marginLeft:400,
        marginTop:100
      },
      submitButton: {
        backgroundColor:'orange' ,
        width:100,
        height:40,
        marginLeft:400,
        marginTop:100
      },
      displayText: {
        padding:10,
        fonstSize:20,
        textAlign:'center',
        fontWeigth:'bold',
        color:'blue'
    }
})