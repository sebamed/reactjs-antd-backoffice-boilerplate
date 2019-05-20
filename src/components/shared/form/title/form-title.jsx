import React from 'react';

const FormTitle = props => {

    const { title = '', subtitle = ''} = props;

    return (
        <div className="form-title">
            <h1>{title}</h1>
            <h5>{subtitle}</h5>
        </div>
    )

}

export default FormTitle;