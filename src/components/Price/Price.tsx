import React from 'react';

interface IPriceProps {
    class: string;
    name: string;
    count: number;
    price: number;
    onDelFood: React.MouseEventHandler<Element>;
}

const Price: React.FC<IPriceProps> = props => {

    let test = 'ToggleButton';

    if (props.count === 0) {
        test = 'hide';
    }

    return (
        <div className={test}>
            <div>{props.name} x {props.count} Price: {props.price}</div>
            <button onClick={props.onDelFood}>X</button>
        </div>
    );
};

export default Price;