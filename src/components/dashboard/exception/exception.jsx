import React from 'react';
import { withRouter } from 'react-router-dom';
import { ExceptionConfig } from './exception-config';

const Exception = props => {

    const { id } = props.match.params;

    return (
        <div className="exception">
            <div className="row">
                <div className="col-md-6">
                    <div className='image' style={{ backgroundImage: `url(${ExceptionConfig[id].img})` }}></div>
                </div>
                <div className="col-md-6">
                    <div className="content">
                        <h1>{ExceptionConfig[id].status}</h1>
                        <h4>{ExceptionConfig[id].description}</h4>
                        {ExceptionConfig[id].button}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default withRouter(Exception);