import React from 'react';

interface IPriceProps {
    class: string;
    name: string;
    count: number;
    price: number;
    onDelFood: React.MouseEventHandler<Element>;
}

const Price: React.FC<IPriceProps> = props => {

    let test = 'show';

    if (props.count === 0) {
        test = 'hide';
    }

    return (
        <div className={test} id="elem">
            <div className="name">{props.name}</div>
            <div className="name"> x {props.count}</div>
            <div className="name">Price: {props.price}</div>
            <button className="btn" onClick={props.onDelFood}>X</button>
        </div>
    );
};

export default Price;