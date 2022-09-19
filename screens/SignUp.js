import React from "react"
import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, TextInput } from 'react-native'
import {logo, primary} from '../constant/index.js'
import Icon from 'react-native-vector-icons/FontAwesome';
function SignUp(props){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
            <TouchableOpacity>
                <Icon name="angle-left" size={30} color="black" style={{
                    fontWeight: '100',
                    marginTop: 20,
                    marginLeft: 20
                }}/>
            </TouchableOpacity>
                
            </View>
            <View style={styles.mid}>
                <Text style = {styles.ca}>Create new account</Text>
                <TextInput style = {styles.input} placeholder={'Full Name'}></TextInput>
                <TextInput style = {styles.input} placeholder={'Phone Number'}></TextInput>
                <TextInput style = {styles.input} placeholder={'Email Adress'}></TextInput>
                <TextInput style = {styles.input} placeholder={'Password'}></TextInput>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity>
                <Text style = {styles.dk}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    top: {
        flex: 10,
        backgroundColor: 'white',

    },
    mid: {
        flex: 50,
        backgroundColor: 'white',
        
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 30,
        alignSelf: 'center',
        paddingStart: 15,
    },
    ca:{
        fontSize: 30,
        marginLeft: 20,
        color: primary,
    },
    bottom: {
        flex: 40,
        backgroundColor: 'white',
    },
    dk: {
        width: '60%',
        height: 50,
        backgroundColor: primary,
        borderRadius: 25,
        textAlign: 'center',
        color: 'white',
        paddingTop: 10,
        fontSize: 20,
        alignSelf: 'center'
    }
});

export default SignUp;