import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategory = ["All Menu", ...new Set(items.map((items) => { return items.category}))]

console.log(allCategory)


function App() {

  const [menuItem, setMenu] = useState(items);
  const [categories, setCategory] = useState(allCategory);

  const filterItem = (categorie )=> {
      if(categorie === "All Menu"){
        setMenu(items);
        return;
      }
      // Filter Based On Catergoreis
      const filtered = items.filter((items) => {return items.category === categorie});
      setMenu(filtered)
     

  }


  return (
    
    <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItem={filterItem} />
      <Menu items={menuItem} />
    </section>
  </main>
  )
}

export default App;
