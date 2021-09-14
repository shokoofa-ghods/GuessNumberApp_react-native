import LottieView from 'lottie-react-native'
import React, { useState, useRef } from 'react'
import { TouchableWithoutFeedback } from 'react-native'


const Animation = props =>{

    const [paused, setpaused] = useState(false)
    const homeAnimation = useRef();

    const pausseHandler = () =>{  
        homeAnimation.current.pause()
        setpaused(true)
    }

    const resumeHandler = () =>{   
        homeAnimation.current.resume()
        setpaused(false)
    }


    return(
        <>
        <TouchableWithoutFeedback onPress={paused ? resumeHandler : pausseHandler}>
            <LottieView 
                source={require('../animations/46472-lurking-cat.json')}
                autoPlay={true}
                style={{width:200, height:170}}
                ref={homeAnimation}
            />
        </TouchableWithoutFeedback>
        </>
    )
}

export default Animation