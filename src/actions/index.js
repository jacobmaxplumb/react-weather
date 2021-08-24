import axios from "axios";

export const UPDATE_CITY = "Update City";
export const GET_WEATHER = "Get Weather";

export const getWeather = city => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa2aefc95ab3fbbaaf699eea4a115eaf`).then(result => {
        return {type: GET_WEATHER, info: result}
    })
}

export const updateCity = text => {
    return {type: UPDATE_CITY, text}
}