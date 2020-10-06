import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


const MainButton = props => {
    return(
        <TouchableOpacity onPress = {props.onPress}>
            <View style = {styles.buttonView}>
                <Text style = {styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonView: {
        backgroundColor: 'orange',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 20,
        color: 'white'
    },
});

export default MainButton;