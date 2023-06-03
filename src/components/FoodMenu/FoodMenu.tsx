import React from 'react';
import food from "../../assets/food.jpg";
import burger from "../../assets/burger.jpg";
import fries from "../../assets/fries.webp";
import cola from "../../assets/cola.jpeg";
import coffee from "../../assets/coffee.webp";
import tea from "../../assets/Tea.jpeg";
import {IFoodMenu} from "../../types";

interface IFoodProps {
    index: number;
    name: string;
    price: number;
    onAddFood: React.MouseEventHandler<Element>;
}

export const MENU: IFoodMenu[] = [
    {name: 'Hamburger', price: 150, img: burger},
    {name: 'Cheeseburger', price: 170, img: food},
    {name: 'Fries', price: 130, img: fries},
    {name: 'Coffee', price: 50, img: coffee},
    {name: 'Tea', price: 30, img: tea},
    {name: 'Cola', price: 60, img: cola},
];


const FoodMenu: React.FC<IFoodProps> = props => {

    return (
        <button onClick={props.onAddFood} className="wrap-inner">
            <img className="pic" src={MENU[props.index].img} alt="pic" />
            <div className="menu">
                <h2>{props.name}</h2>
                <h2>Price: {props.price}</h2>
            </div>
        </button>
    );
};

export default FoodMenu;