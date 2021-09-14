import React from 'react'
import { View,Text,  StyleSheet} from 'react-native'

const TextContainer = props =>{
    return(
        <View>
            <Text>
                {props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default TextContainer