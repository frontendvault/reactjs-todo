import PropType from 'prop-types'

const Button = ({color, text, onClick}) => {


    return <button
        onClick={onClick}
        className="btn text-white"
        style={{
        backgroundColor: color
    }}>
        {text}
    </button>
}
Button.defaultProps = {
    color: 'blue'
}
Button.propType = {
    color: PropType.string.isRequired,
    text: PropType.string.isRequired,
    onClick:PropType.func,
}
export default Button;