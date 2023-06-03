import React from 'react';

interface IInfoProps {
    class: string;
}

const Info: React.FC<IInfoProps> = props => {

    return (
        <div className="empty">
            <p className={props.class}>Order is empty! Please add some items!</p>
        </div>
    );
};

export default Info;