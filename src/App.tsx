import React, {useState} from 'react';
import './App.css';
import { MENU } from "./components/FoodMenu/FoodMenu";
import FoodDrinks from "./components/FoodMenu/FoodDrinks";
import PriceAll from "./components/Price/PriceAll";
import Total from "./components/Total/Total";


const App = () => {

  const [menu, setMenu] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0},
  ]);

  const [addSomeFood, setAddSomeFood] = useState<boolean>(false);

  const [sum, setSum] = useState<number>(0);

  const addFood = (name: string) => {
    setMenu(prevState => {
      return prevState.map(food => {
        if (food.name === name) {
          return {
            ...food,
            count: food.count + 1,
          };
        }
        return food;
      });
    });

    setAddSomeFood(true);
    findSum(name);
  };

  const deleteFood = (name: string) => {

    const index = menu.findIndex(item => item.name === name);

    setMenu(prevState => {
      return prevState.map(food => {
        if (food.name === name) {
          if (food.count > 0) {
            return {
              ...food,
              count: 0,
            };
          }
        }
        return food;
      });
    });

    let total = sum - (menu[index].count * MENU[index].price);

    if (total === 0) {
      setSum(total);
      setAddSomeFood(false);
    }

    setSum(total);

  };

  const findSum = (name: string) => {
    const index = menu.findIndex(person => person.name === name);
    setSum(sum + MENU[index].price);
  };


  return (
        <div className="App">
          <div className="info">
            <p className="order">Order list</p>
            <PriceAll menu={menu} deleteFood={deleteFood} addSomeFood={addSomeFood}/>
            <Total sum={sum} class={addSomeFood ? 'show' : 'hide'}/>
          </div>
            <FoodDrinks menu={menu} addFood={addFood} />
        </div>
    );
  }

export default App;
