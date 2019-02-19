import React from 'react';
import classnames from 'classname';
import PropTypes from 'prop-types'

const SelectListGroup = ({
                             name,
                             value,
                             error,
                             info,
                             onChange,
                             options
                         }) => {
    const selectOptions = options.map(options => (
        <option key={options.label} value={options.value}>
            {options.label}
        </option>
    ))
    return (

        <div className="form-group">
            <select
                className={classnames('form-control form-control-lg', {'is-invalid': error})}
                name={name}
                value={value}
                onChange={onChange}
            >
                {selectOptions}
            </select>
            {info && <small className="form-text text-muted">{info}</small>}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

SelectListGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}


export default SelectListGroup;