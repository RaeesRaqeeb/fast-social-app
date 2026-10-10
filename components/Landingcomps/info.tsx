import React from 'react';
import "./info.css"
type InfoProps = {
    p1?: React.ReactNode;
    p2?: React.ReactNode;
    p3?: React.ReactNode;
    p4?: React.ReactNode;
};

const INFO = (props: InfoProps) => {
    return (
        <div className='text-xs text-white mt-4 cursor-pointer landing'>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            <p>{props.p4}</p>
        </div>
    );
};
export default INFO

