import { connect } from "react-redux"

const WeatherInfo = (props) => {
    return(<div>
        {props.hasWeather ? (<div>Has Weather</div>) : (<div>Doesn't have Weather</div>)}
    </div>)
}

const mapStateToProps = state => {
    return {
        hasWeather: state.info.hasWeather
    }
}

export default connect(mapStateToProps, {})(WeatherInfo);