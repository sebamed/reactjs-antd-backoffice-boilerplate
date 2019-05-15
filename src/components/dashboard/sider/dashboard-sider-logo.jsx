import React from 'react';

const DashboardSiderLogo = props => {
    const { isMobile } = props;

    return (
        <div className={`logo  ${isMobile ? 'logo-mobile' : 'logo-desktop'}`}>
        </div>
    )
}

export default DashboardSiderLogo;