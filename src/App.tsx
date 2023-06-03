import React, {useState} from 'react';
import './App.css';
import { MENU } from "./components/FoodMenu/FoodMenu";
import FoodDrinks from "./components/FoodMenu/FoodDrinks";
import PriceAll from "./components/Price/PriceAll";


const App = () => {

  const [menu, setMenu] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0},
  ]);

  const [addSomeFood, setAddSomeFood] = useState(false);

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
  };

  const deleteFood = (name: string) => {

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
  };

  const getTotalSum = () => {
    return menu.reduce((acc, value) => {
      let food = MENU.filter(ingredient => ingredient.name === value.name)[0];
      if (food) {
        return acc + (food.price * value.count);
      }
      return acc;
    }, 0);
  };

    return (
        <div className="App">
          <div className="info">
            <PriceAll menu={menu} deleteFood={deleteFood} addSomeFood={addSomeFood}/>


            {/*<Info class={addSomeFood ? 'hide' : 'show'}/>*/}
            {/*{menu.map((item, index) => (*/}
            {/*    <Price key={index}*/}
            {/*           name={item.name}*/}
            {/*           count={item.count}*/}
            {/*           price={MENU[index].price}*/}
            {/*           onDelFood={() => deleteFood(item.name)}*/}
            {/*           class={addSomeFood ? 'show' : 'hide'}/>*/}
            {/*))}*/}

          </div>

          <div>
            <FoodDrinks menu={menu} addFood={addFood} />
          </div>


          {/*{menu.map((item, index) => (*/}
          {/*    <FoodMenu key={index}*/}
          {/*              name={item.name}*/}
          {/*              index={index}*/}
          {/*              price={MENU[index].price}*/}
          {/*              onAddFood={() => addFood(item.name)}*/}
          {/*    />*/}
          {/*))}*/}
        </div>
    );
  }

export default App;
