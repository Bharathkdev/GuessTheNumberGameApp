import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';


const Card = props => {
    return(
    <View style = {{...styles.card,...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
   card: {
    padding: 20,
    shadowColor: 'black',                       //works only for iOS
    shadowOffset: {width: 0, height: 2},        //works only for iOS
    shadowRadius: 5,                            //works only for iOS
    shadowOpacity: 0.25,                        //works only for iOS
    elevation: 5,                               //works only for Android
    borderRadius: 5
   },
});

export default Card;