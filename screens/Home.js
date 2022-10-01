import React from "react"
import { View, Text, StyleSheet } from 'react-native'


function Home({ navigation }) {
    return (
        <View>
            <Text style={{alignSelf: 'center'}}>Day la home</Text>
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