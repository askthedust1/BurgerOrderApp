import React from 'react';

interface IPriceProps {
    name: string;
    count: number;
    price: number;
    onDelFood: React.MouseEventHandler<Element>;
}

const Price: React.FC<IPriceProps> = props => {

    return (
        <div>
            <div>{props.name} x {props.count} Price: {props.price}</div>
            <button onClick={props.onDelFood}>X</button>
        </div>
    );
};

export default Price;