import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({handleChange, label, ...rest}) => (
    <div className="group">
        <input className="form-input" 
            onChange={handleChange}
            {...rest}
        />
        {
            label ? 
            <label className={`${rest.value}` ? 'shrink': 'form-input-label'}>
                {label}
            </label> : 
            null
        }
    </div>
);

export default CustomInput;