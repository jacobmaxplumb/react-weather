import { connect } from "react-redux"
import { updateCity, getWeather } from "../actions"

const WeatherForm = (props) => {
    return (<div>
        <input type="text" value={props.city} onChange={(e) => props.updateCity(e.target.value)} />
        <button onClick={() => props.getWeather(props.city)}>Submit</button>
    </div>)
}

const mapStateToProps = state => {
    return {
        city: state.form.city
    }
}

export default connect(mapStateToProps, { updateCity, getWeather })(WeatherForm);