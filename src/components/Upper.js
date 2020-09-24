import React from 'react'
import { View, StyleSheet, Image, Dimensions, ScrollView , Text} from 'react-native';


const Upper = ({imageUri, imageUri1, imageUri2, content}) => {
    
   return( 
   
    <>
    <View style={styles.header} >
    <Image style={styles.image} source={{uri: imageUri }} />
    <View style={styles.bottom_continer}>
     <Text style={styles.textStyle} numberOfLines={3} ellipsizeMode="tail" >{content}</Text>
    </View>
    </View>
    </>
  
)}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#fff',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 10, 
        borderRadius: 10,
        marginBottom: 30,
        width: Dimensions.get('screen').width-100,
    },
    image: {
        height: 250,
        width: Dimensions.get('screen').width-100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    bottom_continer: {
        padding: 5,
        backgroundColor: "#e6e6e6",
        height: 60,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: Dimensions.get('screen').width-100,
    },
    textStyle: {
        fontWeight: '600',
        marginHorizontal: 5,
        marginVertical: 2,
        marginBottom: 5,
        color: 'gray',
        textAlign:'left'
    }
})
export default Upper;