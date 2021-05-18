import React, {useState, useEffect, useContext } from 'react';

const Header = () => {

  return (
    <div>
      <div className="nameBox inputPair">
        <label>
          <input type="text" name="CharName" />
          Character Name
        </label>
      </div>
      <div className="informationBox inputPair">
        <label>
          <input type="text" name="classLevel" />
          Class and Level
        </label>
      </div>
      <div className="background inputPair">
        <label>
          <input type="text" name="background"/>
          Background
        </label>
      </div>
      <div className="inputPair playerName">
        <label>
          <input type="text" name="playerName"/>
          Player Name
        </label>
      </div>
      <div className="inputPair species">
        <label>
          <input type="text" name="species"/>
          Species
        </label>
      </div>
      <div className="inputPair alignment">
        <label>
          <input type="text" name="alignment"/>
          Alignment
        </label>
      </div>
      <div className="inputPair experience">
        <label>
          <input type="number" name="experience"/>
          Experience Points
        </label>
      </div>
    </div>
  )
}

export default Header;