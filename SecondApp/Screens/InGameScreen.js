import React, {useState, useRef, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
} from 'react-native';

import Card from '../Components/Card';
import MainButton from '../Components/MainButton';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';


const getRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (max - min) + min);

    const singleNumberCheck = (randomNumber) => {
            
        if(randomNumber<10){
            return('0' + randomNumber);  // adding zero before a single number
        }
        else{
            return randomNumber;
        }
    };

    if(randomNumber === exclude){
        return getRandomNumber(min, max, exclude);
    }
    else{
        return singleNumberCheck(randomNumber);
    }
};

const InGameScreen = props => {
    
    const[currentGuess, setCurrentGuess] = useState(getRandomNumber(1, 100, props.userChoice));
    const[guessCount, setGuessCount] = useState(0);

    const {userChoice, onGameOver} = props;  // called Array-destructuring used to pull out the arguments needed outside the props.
                                            
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    console.log("usernumber:",userChoice);
    console.log("currentGuess:",currentGuess);
    
    useEffect(() => {
        if(currentGuess===userChoice){
            onGameOver(guessCount);
        }
    }, [guessCount, userChoice, onGameOver]);

    const guessHandler = (direction) => {
        if((direction === 'lower' && currentGuess<props.userChoice) || (direction === 'higher' && currentGuess>props.userChoice)){
           Alert.alert('Wrong Hint', 'Give a correct Hint!', [{text: 'OKAY', style: 'cancel'}]); 
           return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;  
            console.log("lower");
        }
        else{
            currentLow.current = currentGuess;
            console.log("higher");
        }
        const nextGuess = getRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGuess);
        setGuessCount(curNumber => curNumber + 1);
    }

    
    return(
        <ScrollView>
            <View style = {styles.container}>
                <Text style = {styles.inGameScreenTitle}>Opponent's Guess</Text>
                <Card style = {styles.cardContainer}>
                        <View style = {styles.viewCardContainer}>
                            <View style = {styles.higherButtonView}>
                                <MainButton 
                                    onPress = {guessHandler.bind(this, 'higher')}>
                                HIGHER
                                </MainButton>
                            </View>
                            <View style = {styles.displayNumberView}>
                                <Text style = {styles.displayNumber}>{currentGuess}</Text>
                            </View>
                            <View style = {styles.lowerButtonView}>
                                <MainButton 
                                    onPress = {guessHandler.bind(this, 'lower')}  
                                >
                                LOWER
                                </MainButton>
                            </View>
                        </View>    
                </Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    inGameScreenTitle: {
        fontSize: 20
    },

    higherButtonView: {
        padding: 30,
        width: 200,
        height: 80,
        textAlign: "center",
        marginTop: 40,
    },

    lowerButtonView: {
        padding: 30,
        width: 200,
        height: 80,
        textAlign: "center",
        marginTop: 6,
    },

    displayNumber: {
        fontSize: 40,
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: 'pink',
        color: 'white',
        paddingLeft: 7.6,
        paddingTop: 2 
        
    },
    
    displayNumberView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        marginTop: 22
    },

    viewCardContainer: {
        marginTop: -40
    },  

    cardContainer: {
        padding: 40,
        paddingBottom: 60,
        marginTop: 70,
        
    },  
});

export default InGameScreen;