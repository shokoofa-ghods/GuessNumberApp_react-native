import React, { useRef, useState } from 'react'
import { View,Text, Button, StyleSheet, Alert} from 'react-native'
import Card from './Card'
import TextContainer from './TextContainer'


const GameScreen = props =>{

    const highGuess = useRef(100)
    const lowGuess = useRef(1)

    const calculateRandom = (min, max, exclude) =>{
        max = Math.floor(max)
        min = Math.ceil(min)
        const rndNum = Math.floor(Math.random() * (max - min)) + min
        if ( rndNum === exclude){
            return calculateRandom(min, max, exclude)
        }else{
            return rndNum;
        }
    }
    const guessHandler = direction => {
        if(direction === 'lower' && props.userInput > currentGuess
        || direction === 'greater' && props.userInput < currentGuess){
            Alert.alert('Dont Lie !','you know the number is greater',[{text:'sorry',style:'cancel'}])
            return;
        }
        if(direction === 'lower'){
            highGuess.current = currentGuess;
        } 
        else{
            lowGuess.current = currentGuess;
        }
        const newGuess= calculateRandom(lowGuess.current, highGuess.current, currentGuess)
        setcurrentGuess(newGuess)
    }

    const [currentGuess, setcurrentGuess] = useState(calculateRandom( 0 , 100 , props.userInput))

   return(   
    <View style={styles.screen}>
        <Text style={styles.textStyle} >is the Number</Text>
        <View>
            <Card style={styles.cardStyle}>
                <TextContainer>{currentGuess}</TextContainer>
            <View style={styles.buttonStyle}>
                <View style={styles.button} >
                    <Button title='Lower' color='#f79' onPress={guessHandler.bind(this, 'lower')} />
                </View>
                <View style={styles.button} >
                    <Button title='Greater' color='#e6c' onPress={guessHandler.bind(this, 'greater')} />
                </View>
            </View>
            </Card>
        </View>
        
         <Button title='back' onPress={()=>props.backButton() } /> 
    </View>
   )
    
} 

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    cardStyle:{
        marginTop:20,
        marginBottom:10,
        marginHorizontal:25,
        alignItems:'center',
        paddingTop:20,
        paddingBottom:10,
    },
    textStyle:{
        textAlign:'center',
        fontSize:20,
        marginTop:20,
        marginBottom:10
    },
    buttonStyle:{
        flexDirection:'row',
        justifyContent:'flex-start',
        width:250,
        maxWidth:500,
        justifyContent:'space-around',
        padding:10
    },
    button:{
        width:80,
    }
}
)

export default GameScreen