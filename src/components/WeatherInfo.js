import { connect } from "react-redux"

const WeatherInfo = (props) => {
    return(<div>
        {props.hasWeather ? (<div>
            <div>{props.description}</div>
            <div>{props.temp}</div>
        </div>) : (<div>Doesn't have Weather</div>)}
    </div>)
}

const mapStateToProps = state => {
    return {
        hasWeather: state.info.hasWeather,
        description: state.info.description,
        temp: state.info.temp
    }
}

export default connect(mapStateToProps, {})(WeatherInfo);