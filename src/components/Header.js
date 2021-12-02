import PropType from 'prop-types'
import Button from '../components/Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header style={headerStyle} className="d-flex justify-content-between  mb-4">
            <h1 className="fs-5">{title}</h1>
            <Button color={showAdd ? 'green' : 'red'} text={ showAdd ? 'Add' : 'Close'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propType = {
    title: PropType.string.isRequired
}
const headerStyle = {
    color: 'red'
}

export default Header;