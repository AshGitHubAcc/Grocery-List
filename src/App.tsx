import './App.css';
import Header from './Components/Fold-Header/Header';
import List from './Components/Fold-List/List';
import AddItem from './Components/Fold-AddItem/AddItem';
import { useState } from 'react';

function App() {



  const [items, setItems] = useState([])







  return (
    <div className="App">

      <Header></Header>
      <AddItem items={items} setItems={setItems}></AddItem>
      <List></List>

    </div>
  );
}

export default App;
