import { CharProvider, CharContext } from './Context.jsx'
import React, {useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Attributes from './components/Attributes.jsx';
import InspProf from './components/InspProf.jsx';
import Skills from './components/Skills.jsx';
import Saves from './components/Saves.jsx';
import Proficiencies from './components/Proficiencies.jsx';
import CombatBlock from './components/CombatBlock.jsx';
import Weapons from './components/Weapons.jsx';
import Inventory from './components/Inventory.jsx';
import Background from './components/Background.jsx';
import Features from './components/Features.jsx';
import Save from './components/Save.jsx';

const API = () => {

  const { strengthScore, setStrengthScore, dexterityScore, setDexterityScore, constitutionScore, setConstitutionScore, wisdomScore, setWisdomScore, intelligenceScore, setIntelligenceScore, charismaScore, setCharismaScore, backgroundTraits, setBackgroundTraits, combatObj, setCombatObj, featuresObj, setFeatureObj, headerObj, setHeaderObj, inspired, profBonus, setInspired, setProfBonus, items, setItems, profObj, setProfObj, savesObj, setSavesObj, skillsObj, setSkillsObj, weaponOptions, setWeaponOptions } = useContext(CharContext);


  return (
    <div>
      <Header />
      <Attributes />
      <InspProf />
      <Saves />
      <Skills />
      <Proficiencies />
      <CombatBlock />
      <Weapons />
      <Inventory />
      <Background />
      {/* <Features /> */}
      <Save />
    </div>
  )
}

export default API;