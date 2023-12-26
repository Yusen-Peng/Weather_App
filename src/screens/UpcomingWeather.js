import React from 'react'
import { SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground} from 'react-native'

import ListItem from '../components/ListItem';


const UpcomingWeather = ({ weatherData }) =>{
    //renderItem: an arrow function
    //take an item object to render into JSX
    const renderItem = ({item}) => {
        return(
        <ListItem 
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_max} 
        />
        )    
    }

    return(
        <SafeAreaView style={styles.container}>
            
            {/* ImageBackground component
                define an image as the background
                anything in between opening and closing tags are captured by this background image
            */}
            <ImageBackground
                source={require('../../assets/sunset.jpg')}
                style={styles.image}
            >

            {/* FlatList component
                two required props: data + renderItem
                data: source data
                renderItem: an arrow function to render items
                keyExtractor: an arrow function to extract keys
            */}
            <FlatList 
                data={weatherData} 
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />

            </ImageBackground>
        </SafeAreaView>
    )
}

export default UpcomingWeather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'gray' 
    },
    image: {
        flex: 1,
        height: 800,
        width: 400
    }
})