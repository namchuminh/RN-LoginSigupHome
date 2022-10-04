import React, { useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from "../context/AuthContext";


function Home({ navigation }) {
    const {getInfoUser} = useContext(AuthContext)
    return (
        <View>
            <Text style={{alignSelf: 'center'}}>Day la home</Text>
            <TouchableOpacity style={{
                marginTop: 10, 
                width: '80%', 
                height: 50, 
                backgroundColor: 'red', 
                alignSelf: 'center', 
                justifyContent: 'center'}}
                onPress={() => getInfoUser() }
            >
                <Text style={{alignSelf: 'center', color: 'white'}}>Hiển Thị Thông Tin</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});

export default Home;