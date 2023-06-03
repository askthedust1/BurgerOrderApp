import React from 'react';

interface IInfoProps {
    class: string;
}

const Info: React.FC<IInfoProps> = props => {

    return (
        <div>
            <p className={props.class}>Order is empty!</p>
            <p className={props.class}>Please set some items!</p>
        </div>
    );
};

export default Info;