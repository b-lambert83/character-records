import React, { createContext, useState } from 'react';

export const CharContext = createContext();

export const CharProvider = (props) => {

  // attributes
  const [strengthScore, setStrengthScore] = useState(10);
  const [dexterityScore, setDexterityScore] = useState(10);
  const [constitutionScore, setConstitutionScore] = useState(10);
  const [intelligenceScore, setIntelligenceScore] = useState(10);
  const [wisdomScore, setWisdomScore] = useState(10);
  const [charismaScore, setCharismaScore] = useState(10);

  // background
  const [backgroundTraits, setBackgroundTraits] = useState({
    Traits: 'Enter Trait A',
    Ideals: 'Enter Ideal A',
    Bonds: 'Enter Bond A',
    Flaws: 'Enter Flaw A'
  });

  // combat block
  const [combatObj, setCombatObj] = useState({
    armorClass: 0,
    initiative: 0,
    speed: '30 ft',
    currentHitPoints: 0,
    maxHitPoints: 0,
    maxHitDice: 0,
    currentHitDice: 0,
    success1: false,
    success2: false,
    success3: false,
    failure1: false,
    failure2: false,
    failure3: false,
  });

  // Features
  const [featuresObj, setFeatureObj] = useState({
    Feature: ['Source', 'Description']
  });

  // Header
  const [headerObj, setHeaderObj] = useState({
    charName: 'Enter Name',
    classLevel: 'Enter Class and Level',
    background: 'Enter Background',
    playerName: 'Enter Player Name',
    species: 'Ener Species',
    alignment: 'Enter Alignment',
    experience: 0
  })

  // InspProf
  const [inspired, setInspired] = useState(false);
  const [profBonus, setProfBonus] = useState(0);

  // items
  const [items, setItems] = useState({
    ITEM: ['WEIGHT', 'COST/ITEM', 'QUANTITY','SLOT'],
  });

  // Proficiencies
  const [profObj, setProfObj] = useState({
    'count': 0
  })

  // saves
  const [savesObj, setSavesObj] = useState({
    STRENGTH: [0, false],
    DEXTERITY: [0, false],
    CONSTITUTION: [0, false],
    INTELLIGENCE: [0, false],
    WISDOM: [0, false],
    CHARISMA: [0, false]
  })

  const [skillsObj, setSkillsObj] = useState({
    'Acrobatics': ['(dex)', 0, false],
    'Animal Handling': ['(wis)', 0, false],
    'Arcana': ['(int)',  0, false],
    'Athletics': ['(str)',  0, false],
    'Deception': ['(cha)',  0, false],
    'History': ['(int)',  0, false],
    'Insight': ['(wis)',  0, false],
    'Intimidation': ['(cha)',  0, false],
    'Medicine': ['(wis)', 0, false],
    'Nature': ['(int)',  0, false],
    'Perception': ['(wis)',  0, false],
    'Performance': ['(cha)',  0, false],
    'Persiasion': ['(cha)',  0, false],
    'Religeon': ['(int)',  0, false],
    'Slieght of Hand': ['(dex)',  0, false],
    'Stealth': ['(dex)',  0, false],
    'Survival': ['(wis)',  0, false]
  });

    // Attacks and Weapons
    const [weaponOptions, setWeaponOptions] = useState({
      NAME: ['BONUS', 'DAMAGE']
    });

    return (
      <CharContext.Provider value={{
        strengthScore, setStrengthScore, dexterityScore, setDexterityScore, constitutionScore, setConstitutionScore, wisdomScore, setWisdomScore, intelligenceScore, setIntelligenceScore, charismaScore, setCharismaScore, backgroundTraits, setBackgroundTraits, combatObj, setCombatObj, featuresObj, setFeatureObj, headerObj, setHeaderObj, inspired, profBonus, setInspired, setProfBonus, items, setItems, profObj, setProfObj, savesObj, setSavesObj, skillsObj, setSkillsObj, weaponOptions, setWeaponOptions
        }}
      >
        {props.children}
      </CharContext.Provider>
    )

}