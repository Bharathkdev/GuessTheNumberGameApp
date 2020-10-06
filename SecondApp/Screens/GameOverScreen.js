import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

import MainButton from '../Components/MainButton';

const GameOverScreen = props => {


    return(
           <ScrollView>
                <View style = {styles.container}>
                    <Text style = {styles.textfontSizeGameOver}>Game Over!!!</Text>
                    <Image 
                        
                        source = {require('../assets/success.png')} 
                        //source = {{uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fuw-s3-cdn%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F11%2F04133712%2Fwaterfall.jpg&imgrefurl=https%3A%2F%2Fwww.washington.edu%2Fnews%2F2017%2F11%2F15%2Fwhat-counts-as-nature-it-all-depends%2F&tbnid=VE7AiPlReOUUcM&vet=12ahUKEwiNnanZiK7rAhV1n0sFHS4ABb0QMygFegUIARDXAQ..i&docid=BgwJO-fS-rcTUM&w=2048&h=1365&q=nature&ved=2ahUKEwiNnanZiK7rAhV1n0sFHS4ABb0QMygFegUIARDXAQ'}}
                        style = {styles.imageView}
                        resizeMode = "cover"    
                    />
                    <View style = {styles.textView}>
                        <Text style = {styles.textfontSizeGuessCount}>No of Guesses: {props.guessCount}</Text>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <MainButton 
                            onPress = {props.setGameOver}    
                        >PLAY AGAIN!</MainButton>
                    </View>
                </View>
            </ScrollView>
           
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageView: {
        marginTop: 30,
        width: '80%',
        height: 300,
        borderRadius: 10, 
    },

    textfontSizeGameOver: {
        fontSize: 25,
    },

    textfontSizeGuessCount: {
        fontSize: 20,
    },  

    textView: {
        marginTop: 30,
    },

    buttonContainer: {
        marginTop: 40,
        
    },

    cardContainer: {
        padding: 10,
        paddingBottom: 60,
       // marginTop: 100,
        width: '80%',
        marginLeft: 40
    },  
});

export default GameOverScreen;