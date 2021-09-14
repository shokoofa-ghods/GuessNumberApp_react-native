import React from 'react'
import {View, TextInput ,StyleSheet} from 'react-native'

const Input = props =>{

    return(

        <TextInput {...props} style={styles.input} />
    )
}

const styles= StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:'grey',
        height:40,
        marginBottom:20,
        marginTop:10,
        width:30,
        textAlign:'center'
    }
})

export default Input;