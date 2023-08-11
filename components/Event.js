import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import img from "../assets/img.jpg"

export default function Event({item}) {
  return (
    <View style={styles.lister}>
        {/* {console.log(item)} */}
        <Image source={img} style={{ width: "100%", height: 290 }} />
        <View style={styles.names}>
        <Text style={styles.info}> {item.event_name} </Text>
        <Text style={styles.info}> {item.event_type} </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    lister:{
        marginBottom:"4%",
        borderRadius:10,
        backgroundColor:"ivory",
        borderWidth:2,
        borderColor:"gray",
        marginHorizontal:"1%"
    },
    names:{
        paddingLeft:"3%",
        justifyContent:"space-between",
        marginTop:"3%",
        flexDirection:"row",
        paddingBottom:"2%"
    },
    info:{
        fontSize:20,
        fontWeight:"bold",
        paddingHorizontal:"3%"
    }
})