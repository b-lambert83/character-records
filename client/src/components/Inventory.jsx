import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx'

const Inventory = () => {

  const {items, setItems} = useContext(CharContext);

  const itemsRender = Object.keys(items).map((key) => (
    <div key={key}>
      <t> {key} </t><t> {items[key][0]} lbs.</t><t> {items[key][1]} GP</t><t> {items[key][2]} </t><t> {items[key][3]} </t>
    </div>
  ));

  const handleItemSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setItems({...items,
      [e.target[0].value]: [
        e.target[1].value,
        e.target[2].value,
        e.target[3].value,
        e.target[4].value
      ]
    })
  }

  return (
    <div>
      {itemsRender}
      <div>
        <form id="addItem" onSubmit={handleItemSubmit}/>
        <label>
          <input form="addItem" type="text" name="item"/>
          ITEM
        </label>
        <label>
          <input form="addItem" type="number" name="weight"/>
          WEIGHT
        </label>
        <label>
          <input form="addItem" type="number" name="costPerItem"/>
          COST/ITEM
        </label>
        <label>
          <input form="addItem" type="number" name="quantity"/>
          QUANTITY
        </label>
        <label>
          <input form="addItem" type="text" name="slot"/>
          LOCATION SLOT
        </label>
        <input form="addItem" type="submit" value="Add Item"/>
      </div>
    </div>
  )
}

export default Inventory;