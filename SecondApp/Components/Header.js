import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const Header = props => {
    return(
        <View style = {styles.header}>
            <Text style = {styles.headerTitle}>{props.title}</Text>
        </View>
    );   
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        width: '100%',
        height: 80
    },

    headerTitle: {
        color: 'white',
        fontSize: 25
    },
});

export default Header;