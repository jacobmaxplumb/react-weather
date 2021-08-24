import axios from "axios";

export const UPDATE_CITY = "Update City";
export const GET_WEATHER = "Get Weather";
export const GOT_WEATHER = "Got Weather";

export const getWeather = city => dispatch => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa2aefc95ab3fbbaaf699eea4a115eaf`).then(result => {
        console.log(result);
        const description = result.data.weather[0].description;
        const temp = result.data.main.temp;
        dispatch(gotWeather(description, temp)) 
    })
}

export const gotWeather = (description, temp) => {
    console.log(description);
    console.log(temp)
    return {type: GOT_WEATHER, description, temp}
}

export const updateCity = text => {
    return {type: UPDATE_CITY, text}
}