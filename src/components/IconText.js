import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const IconText = (props) => {
    
    //destructuring
    const {iconName, iconColor, bodyText, bodyTextStyles} = props 

    return(
        <View style={styles.container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'row'
    },

    textTheme: {
        fontWeight: 'bold'
    }
})


export default IconText;