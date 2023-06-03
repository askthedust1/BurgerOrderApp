import React from 'react';
import { IFoodMenus } from "../../types";
import FoodMenu from "../FoodMenu/FoodMenu";
import {MENU} from "../FoodMenu/FoodMenu";


interface IProps {
    menu: IFoodMenus[];
    addFood: (name: string) => void;
}

const FoodDrinks: React.FC<IProps> = ({menu, addFood}) => {
    return (
        <div>
            {menu.map((item, index) => (
                <FoodMenu key={index}
                          name={item.name}
                          index={index}
                          price={MENU[index].price}
                          onAddFood={() => addFood(item.name)}
                />
            ))}
        </div>
    );
};

export default FoodDrinks;