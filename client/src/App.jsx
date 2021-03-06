import React, {useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import Header from './components/Header.jsx';
// import Attributes from './components/Attributes.jsx';
// import InspProf from './components/InspProf.jsx';
// import Skills from './components/Skills.jsx';
// import Saves from './components/Saves.jsx';
// import Proficiencies from './components/Proficiencies.jsx';
// import CombatBlock from './components/CombatBlock.jsx';
// import Weapons from './components/Weapons.jsx';
// import Inventory from './components/Inventory.jsx';
// import Background from './components/Background.jsx';
// import Features from './components/Features.jsx';
// import Save from './components/Save.jsx';
import { CharProvider } from './Context.jsx'
import API from './API.jsx';

const App = () => {

  return (
  <CharProvider>
    <div>
      <API />
    </div>
  </CharProvider>
  )
}


export default App;