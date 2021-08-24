import { connect } from "react-redux"
import { updateCity } from "../actions"

const WeatherForm = (props) => {
    return (<div>
        <input type="text" value={props.city} onChange={(e) => props.updateCity(e.target.value)} />
    </div>)
}

const mapStateToProps = state => {
    return {
        city: state.form.city
    }
}

export default connect(mapStateToProps, { updateCity })(WeatherForm);