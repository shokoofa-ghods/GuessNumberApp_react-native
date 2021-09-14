import React,{createContext, useState} from 'react'
import { Text,StyleSheet,View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from './Card'
import Input from './Input'
import Animation from './Animation'

const StartScreen = props => {

    const cntx = createContext()
    const [confirmed, setconfirmed] = useState(false)
    const [enteredVal, setenteredVal] = useState('')
    const [finalVal, setfinalVal] = useState('')
    const inputHandler = text => {
        setenteredVal(text.replace(/[^0-9]/g,''))
    }
    const resetHandler = () =>{
        setconfirmed(false)
        setenteredVal('')
    }
    const confirmHandler = () =>{
        Keyboard.dismiss()
        if(  enteredVal< 1 || enteredVal >= 100 || isNaN(enteredVal) ){
            Alert.alert('Invalid Input','The input has to be a Number between 1 and 99',
            [{text:'Okay',style:'cancel',onPress:resetHandler }] ) 
            return;
        }
        if(enteredVal != '') 
            setfinalVal(parseInt(enteredVal))    
            setconfirmed(true)                
    }
    let confStateHandler = confirmed

    let val,but
    if(confirmed){
        val = <View style={styles.textContainer}>
                <Text style={{color:'#55f'}}>You Choosed</Text>
                <Text style={styles.text}>{finalVal}</Text>
            </View>
        but= <View style={styles.startButton}>
                <Button title='Start Game' color='#58d' onPress={()=>props.startGameHandler(finalVal)}  />
            </View>
    }
       

    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
            <View style={styles.screen}>
            
            <Text style={{fontSize:20, paddingTop:20}}>
                Start a New Game !
            </Text>
            <Animation stateHandler={confStateHandler} />
            <Card style={styles.inputContainer} >
                <Input 
                    keyboardType='number-pad'
                    maxLength={2}  
                    value={enteredVal} 
                    onChangeText={inputHandler}
                >
                </Input>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={resetHandler} color='#f79' title='Reset'>
                        </Button>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={confirmHandler} color='#e6c' title='Confirm'></Button>
                    </View>
                </View>
            </Card>
            
            {val}
            {but}
            </View>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-around',
        paddingHorizontal:15,
        marginBottom:20,
    },
    button:{
        width:100,
    },
    textContainer:{
        paddingTop:30,
        alignItems:'center',
    },
    text:{
        fontSize:50,
        color:'#85f'
    },
    startButton:{
        marginTop:20
    }
})

export default StartScreen