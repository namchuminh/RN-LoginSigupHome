import React from "react"
import {View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {logo, primary} from '../constant/index.js'
function Welcome({ navigation }){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={{uri: logo,}} style={styles.logo}/>
                
            </View>
            <View style={styles.mid}>
                <Text style ={styles.title}>Welcome to your</Text>
                <Text style = {styles.title2}>Welcome to your app. Build your own social network in minutes.</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                    <Text style = {styles.LogIn}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style = {styles.SignUp}>Sign Up</Text>
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
        flex: 40,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    mid: {
        flex: 20,
        backgroundColor: 'white',
        paddingHorizontal: 40,
        
    },
    title: {
        fontSize: 30,
        color: primary,
        marginBottom: 20,
        alignSelf: 'center',
    },
    title2: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    bottom: {
        flex: 40,
        backgroundColor: 'white',
    },
    LogIn: {
        width: '80%',
        height: 70,
        backgroundColor: primary,
        alignSelf: 'center',
        borderRadius: 28,
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 20,
        color: 'white'
    },
    SignUp: {
        marginTop: 40,
        width: '80%',
        height: 70,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 28,
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 20,
        color: primary,
        borderWidth: 1,
        borderColor: primary,
    },
    logo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    }
});

export default Welcome;