import Header from './Components/Header/Header'
import CardList from './Components/Cartlist/CardList';
import data from './Components/Cartlist/cartData.json'
import { useState } from 'react';


function App() {
 // The initial state of total items in the cart is set to the total number of items in the initial data.
 let [totalitems, setTotalItems] = useState(data.length)

 const updatedItemList = (list) => {
    let totalItemsUpdated = list.reduce((sum, val) => {
      return sum + val.amount;
    },0)
    setTotalItems(totalItemsUpdated);
 }


 return (
    <>
    <Header cartTotal = {totalitems}/>
    <CardList updatefn = {updatedItemList}/>
    </>
 );
}

export default App;
