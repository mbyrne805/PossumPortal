import * as React from 'react';

export default function CategorySelect(props) {
  //https://stackoverflow.com/questions/73198612/mui-select-border-not-extending-to-label-white-space

  return (
    <select onChange={props.handleChange} name="cars" id="cars" style={{position: "absolute", top: 8, left: 8, padding: 5, borderRadius: 4}}>
      <option value="trash">Trash</option>
      <option value="ecology">Ecology</option>
      <option value="restoration">Restoration</option>
      <option value="fire">Fire</option>
      <option value="forage">Forage</option>
      <option value="custom">Custom</option>
    </select>
  );
}