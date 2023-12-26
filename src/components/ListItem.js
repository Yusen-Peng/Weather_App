import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
//item component
const ListItem = (props) => {
    
    //destructure props to fetch information
    const {dt_txt, min, max, condition} = props

    return(
        <View style={styles.item}>
            <Feather name={weatherType[condition].icon} size={50} color='yellow'/>
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{Math.round(min)} </Text>
            <Text style={styles.temp}>{Math.round(max)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        //space-around: items in a row are evenly distributed
        justifyContent: 'space-around',
        alignItems:'center',
        borderWidth: 4,
        backgroundColor: 'pink'
    },
    temp: {
        fontSize: 12,
        color: 'white'
    },
    date: {
        fontSize: 12,
        color: 'white'     
    },
})

export default ListItem;

