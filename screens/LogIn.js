import React from "react"
import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, TextInput } from 'react-native'
import {logo, primary} from '../constant/index.js'
import Icon from 'react-native-vector-icons/FontAwesome';
function SignUp({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="angle-left" size={30} color="black" style={{
                    fontWeight: '100',
                    marginTop: 20,
                    marginLeft: 20
                }}/>
            </TouchableOpacity>
                
            </View>
            <View style={styles.mid}>
                <Text style = {styles.ca}>Log in</Text>
                <TextInput style = {styles.input} placeholder={'E-mail or phone number'}></TextInput>
                <TextInput style = {styles.input} placeholder={'Password'}></TextInput>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity>
                <Text style = {styles.li}>Log in</Text>
            </TouchableOpacity>
            <Text style = {styles.or}>OR</Text>
            <TouchableOpacity>
                <Text style = {styles.fbli}>Facebook login</Text>
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
        flex: 30,
        backgroundColor: 'white',
        
    },
    input: {
        height: 60,
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
    li: {
        width: '60%',
        height: 50,
        backgroundColor: primary,
        borderRadius: 25,
        textAlign: 'center',
        color: 'white',
        paddingTop: 10,
        fontSize: 20,
        alignSelf: 'center'
    },
    or: {
        marginVertical: 40,
        alignSelf: 'center',
        fontSize: 20,
        
    },
    fbli: {
        width: '60%',
        height: 50,
        backgroundColor: '#3B5998',
        borderRadius: 25,
        textAlign: 'center',
        color: 'white',
        paddingTop: 10,
        fontSize: 20,
        alignSelf: 'center'
    }
});

export default SignUp;