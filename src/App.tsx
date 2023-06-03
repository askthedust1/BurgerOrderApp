import React, {useState} from 'react';
import './App.css';
import FoodMenu from "./components/FoodMenu";
import { MENU } from "./components/FoodMenu";


const App = () => {

  const [menu, setMenu] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0},
  ]);


  return (
    <div className="App">
      {menu.map((item, index) => (
          <FoodMenu key={index}
                       name={item.name}
                       index={index}
                       price={MENU[index].price}
          />
      ))}
    </div>
  );
}

export default App;
