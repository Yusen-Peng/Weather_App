import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native'
import IconText from '../components/IconText'
const City = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/City.png')}
                style={styles.imageLayout}>
                {/* We can pass an array of multiple CSS for styling  */}
                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>UK</Text>
                
                <View style={[styles.populationWrapper, styles.rowLayout]}>
                    <IconText iconName='user' iconColor='yellow' bodyText='8000' bodyTextStyles={styles.populationText}/>
                </View>
                <View style={[styles.riseSetWrapper, styles.rowLayout]}>
                    <IconText iconName='sunrise' iconColor='white' bodyText='10:46 AM' bodyTextStyles={styles.riseSetText}/>
                    <IconText iconName='sunset' iconColor='white' bodyText='17:29 PM' bodyTextStyles={styles.riseSetText}/>
                </View>


            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageLayout: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        //use "alighItem" for containers, use "alignSelf" for single entity 
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    //general layout for IconText containers
    rowLayout: {
        flexDirection: 'row',
        //alignItems: align items within the container
        alignItems: 'center'
    },
    populationWrapper: {
        //justifyContent: align the container itself
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'lightgreen', 
        fontWeight: 'bold'
    },
    riseSetWrapper:{
        //justifyContent: align the container itself
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
    
})

export default City;