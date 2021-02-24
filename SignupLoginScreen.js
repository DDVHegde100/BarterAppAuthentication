import React,{Component} from 'react';
import {
View,
Text,
TextInput,
Modal,
KeyboardAvoidingView,
StyleSheet,
TouchableOpacity,
Alert,
ScrollView
} from 'react-native';

import db from '../config'
import firebase from 'firebase';



export default class LoginScreen extends Component{
  constructor(){
    super();
    this.state={
      emailid:'',
      password:'',
    }
  }
 userSignUp=(emailid,password)=>{
firebase.auth().createUserWithEmailAndPassword(emailid,password).then((response)=>{
return Alert.alert("User Added Succesfully")
})
.catch((error)=> {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    return Alert.alert(errormessage)
  });
 }
 userLogin=(emailid,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailid,password).then((response)=>{
    return Alert.alert("Succesfully Logined")
    })
    .catch((error)=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errormessage)
      });
     }

     render(){
        return(
         <View style={styles.container}>
    <View>
        <Text style={styles.title}>The Bater System App</Text>
    </View>
    <View>
        <TextInput
        style={styles.loginBox}
        placeholder="abc@gmail.com"
        keyboardType="email-address"
        onChangeText={(text)=>{
            this.setState({
              emailid: text
            })
        }}
        />
    
    <TextInput
        style={styles.loginBox}
        placeholder="password"
      secureTextEntry={true}
        onChangeText={(text)=>{
            this.setState({
              password: text
            })
        }}
        />
    <TouchableOpacity
    style={styles.button}
    onPress={()=>{this.userLogin(this.state.emailid,this.state.password)}}
    >
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
    style={styles.button}
    onPress={()=>{this.userSignUp(this.state.emailid,this.state.password)}}
    >
    <Text style={styles.buttonText}>SignUp</Text>
    </TouchableOpacity>
    </View>
         </View>
        )
      }
    }