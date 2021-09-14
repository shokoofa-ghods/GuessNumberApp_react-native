import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = props => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.textStyle}>
                {props.title}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer:{
        width:'100%',
        height:90,
        alignItems:'center',
        paddingTop:30,
        backgroundColor: '#f7287b'
    },
    textStyle:{
        fontSize: 20,
        color:'pink'
    }
});

export default Header;