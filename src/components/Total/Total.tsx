import React from 'react';

interface IInfoProps {
    sum: number;
    class: string;
}

const Total: React.FC<IInfoProps> = props => {

    return (
        <div className={props.class} id="total">
            <p>Total Price: {props.sum}</p>
        </div>
    );
};

export default Total;