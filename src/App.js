import { useState } from 'react'
import DarkModer from './components/DarkModer';

import Header from "./components/Header";
import InitiativeArea from "./components/InitiativeArea";
import PlayerPanel from "./components/PlayerPanel";
import setTheme from "./setTheme"


function App() {
  const [id, setId] = useState(0)
  const [inits, setInits] = useState([])
  const [isDark, setIsDark] = useState(false)

  const onInitChange = (index, value) => {
      let a = inits.map((p) => p)
      a[index].init = value
      a.sort(function(a, b) {return b.init - a.init})
      setInits(a)
  }

  const onDelete = (id) => {
    setInits(inits.filter((i) => i.id !== id))
  }

  const onAdd = (namevar) => {
    let found = false
    inits.forEach(function(i) {found = found || i.name===namevar})
    if (found) {
      alert(namevar + " is already added...")
    } else {
      setInits([...inits, {name:namevar, init:0, id:id}])
      setId(id+1)
    }
  }

  const switchTheme = ()=>{
    setIsDark(!isDark)
    setTheme(!isDark)
  }
  
  return (
    <div className="App p-5">
      <DarkModer isDark={isDark} onClick={switchTheme}/>
      <Header />
      <ul className="list-inline d-flex flex-wrap w-100 m-5">
        <li className="list-inline-item col-3"><PlayerPanel title="Characters" onAddInit={onAdd} isDark={isDark}/></li>
        <li className="list-inline-item col-5"><InitiativeArea inits={inits} onInitChange={onInitChange} onDelete={onDelete} isDark={isDark}/></li>
        <li className="list-inline-item col-3"><PlayerPanel title="Monsters" onAddInit={onAdd} isDark={isDark}/></li>
      </ul>
    </div>
  );
}

export default App;
