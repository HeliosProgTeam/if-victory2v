import React from 'react';
import PhoneIcon from "./phoneIcon.svg"

const Phone = (props) => {
    const {phone} = props
    return (
        <div className="phone">
            <div className="phone__icon">
                {/*<PhoneIcon/>*/}
            </div>
            <a className="phone__number" href={`tel:${phone}`}>
                +38{phone}
            </a>
        </div>
    );
};

export default Phone;