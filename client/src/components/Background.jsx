import React, {useState, useEffect, useContext } from 'react';

const Background = () => {

  const [backgroundTraits, setBackgroundTraits] = useState({
    Traits: 'Enter Trait A',
    Ideals: 'Enter Ideal A',
    Bonds: 'Enter Bond A',
    Flaws: 'Enter Flaw A'
  });

  const handleTraitSubmit = (e) => {
    e.preventDefault();
    e.persist();

  }

  const traitsRender = Object.keys(backgroundTraits).map((key) => (
    <div key={key}>
       <textarea type="text" name="key" form="addTrait" value={backgroundTraits[key]} onChange={(e) => {setBackgroundTraits({
        ...backgroundTraits,
        [key]: e.target.value
      })}}/>
       <h1> {key} </h1>
    </div>
  ));

  return (
    <div>
      {traitsRender}
    </div>
  )
}

export default Background;