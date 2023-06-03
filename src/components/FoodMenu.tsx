import React from 'react';
import food from "../assets/food.png";
import drink from "../assets/cola.png";
import {IFoodMenu} from "../types";

interface IFoodProps {
    index: number;
    name: string;
    price: number;
}

export const MENU: IFoodMenu[] = [
    {name: 'Hamburger', price: 150, img: food},
    {name: 'Cheeseburger', price: 170, img: food},
    {name: 'Fries', price: 130, img: food},
    {name: 'Coffee', price: 50, img: drink},
    {name: 'Tea', price: 30, img: drink},
    {name: 'Cola', price: 60, img: drink},
];


const FoodMenu: React.FC<IFoodProps> = props => {

    return (
        <button className="wrap-inner">
            <img className="pic" src={MENU[props.index].img} alt="pic" />
            <h2>{props.name} x {props.price}</h2>
        </button>
    );
};

export default FoodMenu;