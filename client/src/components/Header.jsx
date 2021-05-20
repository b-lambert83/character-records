import React, {useState, useEffect, useContext } from 'react';

const Header = () => {
  const [charName, setCharName] = useState('Enter Name');
  const [classLevel, setClassLevel] = useState('Enter Class and Level');
  const [background, setBackground] = useState('Enter Background');
  const [playerName, setPlayerName] = useState('Enter Player Name');
  const [species, setSpecies] = useState('Enter Species');
  const [alignment, setAlignment] = useState('Enter Alignment');
  const [experience, setExperience] = useState(0);


  return (
    <div className="headerContainer">
      <div className="nameBox headerPair">
        <input type="text" name="charName" onChange={(e) => setCharName(e.target.value)} value={charName}/>
        <t>Character Name</t>
      </div>
      <div className="informationBox headerPair">
          <input type="text" name="classLevel" onChange={(e) => setClassLevel(e.target.value)} value={classLevel}/>
          <t>Class and Level</t>
      </div>
      <div className="background headerPair">
          <input type="text" name="background" onChange={(e) => setBackground(e.target.value)} value={background}/>
          <t>Background</t>
      </div>
      <div className="headerPair playerName">
          <input type="text" name="playerName" onChange={(e) => setPlayerName(e.target.value)} value={playerName}/>
          <t>Player Name</t>
      </div>
      <div className="headerPair species">
        <input type="text" name="species" onChange={(e) => setSpecies(e.target.value)} value={species}/>
        <t>Species</t>
      </div>
      <div className="headerPair alignment">
        <input type="text" name="alignment" onChange={(e) => setAlignment(e.target.value)} value={alignment}/>
        <t>Alignment</t>
      </div>
      <div className="headerPair experience">
        <input type="number" name="experience" onChange={(e) => setExperience(e.target.value)} value={experience}/>
        <t>Experience Points</t>
      </div>
    </div>
  )
}

export default Header;