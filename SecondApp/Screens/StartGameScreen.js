import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Card from '../Components/Card';
import Input from '../Components/Input';
import MainButton from '../Components/MainButton';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const[confirmed, setConfirmed] = useState(false);
    const[selectedNumber, setSelectedNumber] = useState('');

    const window = useWindowDimensions();


    const inputNumberHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);

        if(Boolean(enteredValue)==false || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Number!','Number should be between 1 and 99.', [{text: 'OK', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');  
        Keyboard.dismiss();
    };

    const singleNumberCheck = (chosenNumber) => {
            
        if(chosenNumber<10){
            return('0' + chosenNumber);  // adding zero before a single number
        }
        else{
            return chosenNumber;
        }
    };

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = 
        <Card style = {styles.confirmCard}>
            <View style = {styles.confirmView}>
                <View style = {styles.textView}>
                    <Text style = {styles.title}>Chosen Number</Text>
                </View>
                <View style = {styles.displayNumberView}>
                   <Text style = {styles.displayNumber}>{singleNumberCheck(selectedNumber)}</Text>
                </View>
                <MainButton  
                    onPress = {() => {props.onStartGame(singleNumberCheck(selectedNumber))}}
                >
                START GAME!
                </MainButton>
            </View>
        </Card>    
    }


    return(
        <ScrollView>
            <TouchableWithoutFeedback onPress = {() => {
                Keyboard.dismiss();
            }}>
                <View style = {styles.container}>
                    <Text style = {styles.title} >Start a New Game</Text>
                    <Card style = {styles.inputContainer}>
                        <Text>Enter a Number!</Text>
                        <Input 
                            style = {styles.input} 
                            blurOnSumbit 
                            keyboardType = "number-pad" 
                            maxLength = {2}
                            onChangeText = {inputNumberHandler}                 
                            value = {enteredValue}
                        />
                        <TouchableOpacity activeOpacity = {1.0}>
                            <View style = {styles.outerButtonContainer}>
                                <View style = {styles.buttonContainer}>
                                    <Button title = "Confirm" onPress = {confirmInputHandler}/>
                                </View>
                                <View style = {styles.buttonContainer}> 
                                    <Button 
                                        title = "Reset" 
                                        color = 'red'
                                        onPress = {resetInputHandler}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Card>
                    {confirmedOutput}
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        justifyContent: 'flex-start'
    },

    inputContainer: {
        alignItems: 'center',
        width: "100%",
        marginTop: 40,
    }, 
    
    textView: {
        alignItems: 'center'
    },

    title: {
        fontSize: 20
    },

    outerButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 250,
        padding: 5,
        marginLeft: 20
    },

    buttonContainer: {
        width: 100,
    },

    input: {
        paddingHorizontal: 30
    },

    confirmView: {
        padding: 20,
        paddingVertical: 10,
    },

    confirmCard: {
        marginTop: 30
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
        paddingVertical: 15,
    },


});

export default StartGameScreen;