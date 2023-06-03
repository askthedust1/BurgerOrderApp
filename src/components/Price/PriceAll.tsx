import React from 'react';
import { IFoodMenus } from "../../types";
import Info from "../Info/Info";
import Price from "../Price/Price";
import {MENU} from "../FoodMenu/FoodMenu";

interface IProps {
    menu: IFoodMenus[];
    deleteFood: (name: string) => void;
    addSomeFood: boolean;
}

const PriceAll: React.FC<IProps> = ({menu, addSomeFood, deleteFood}) => {

    return (
        <div className="price">
            <Info class={addSomeFood ? 'hide' : 'show'}/>
            {menu.map((item, index) => (
                <Price key={index}
                       name={item.name}
                       count={item.count}
                       price={MENU[index].price * item.count}
                       onDelFood={() => deleteFood(item.name)}
                       class={addSomeFood ? 'show' : 'hide'}/>
            ))}
        </div>
    );
};

export default PriceAll;