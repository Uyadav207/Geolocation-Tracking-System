import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.Header} >
            <Entypo style={{ marginLeft: 10 }} name="location" size={30} color="#e84a5f" />
            <Text style={styles.textStyle}>Trackon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 60,
        backgroundColor: '#eee',
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
        padding: 10,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    textStyle: {
        marginLeft: 20,
        fontSize: 30,
        fontWeight: '700'
    }
})

export default Header;
