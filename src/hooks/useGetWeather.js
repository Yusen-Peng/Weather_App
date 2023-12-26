import {useEffect, useState} from 'react'
//import Location
import * as Location from 'expo-location'

//useGetWeather: a customized hook
export const useGetWeather = () => {
  //useState hook
  //initial value should be passed as a parameter
  //loading state: either loading or NOT loading
  const [loading, setLoading] = useState(false)
  
  //error
  const [error, setError] = useState(null)

  //weather
  const [weather, setWeather] = useState({})

  //latitude
  const [lat, setLat] = useState([])
  
  //longitude
  const [lon, setLon] = useState([])

  
  const fetchWeatherData = async() => {

    try{
      //fetch the data in JSON format
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2926a2f048de10b55c3d93f8d76157f5`)
    
      const data = await res.json() 

      //update weather
      setWeather(data)
    
    }catch(e){
      setError('Could not fetch weather')

    }finally{

      //data is fetched/error occurs; no more loading
      setLoading(false)
    }    
  }

  //useEffect hook
  //setup: an arrow function as the first parameter
  //dependencies: an array that contains props/states
  //useEffect will be triggered if props/states are changed
  useEffect(() => {
    
    //(async() => {...}): define the async function 
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      //if the location is accessible
      if(status !== 'granted'){
        setError('Permission to access location was denied')
        return
      }

      //get current position (latitude + longitude) 
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)

      //fetch weather data
      await fetchWeatherData()

    //(): immediately invoke the async function just defined
    })()
    
  //dependencies: useEffect will be triggered if lat/lon are changed  
  }, [lat, lon])


  return [loading, error, weather]

}