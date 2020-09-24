import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.Header} >
            <Entypo style={{ marginLeft: 10 }} name="location" size={30} color="black" />
            <Text style={styles.textStyle}>Trackon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
        padding: 10,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    textStyle: {
        marginLeft: 20,
        fontSize: 30,
        fontWeight: '700'
    }
})

export default Header;
