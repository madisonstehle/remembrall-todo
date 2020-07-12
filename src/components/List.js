import React, { useContext } from 'react';
import SettingsContext from '../SettingsContext.js';

import Item from './Item.js';

function List(props) {
  const data = useContext(SettingsContext);
  let list = [];
  let testObj = {title: 'Potato', description: 'do the thing plz'}

  // do work to grab each item, pass it through our item formatter, shove that into array
  // <Item task={title: 'Potato', description: 'do the thing plz' } />
  list.push(<Item task={ testObj } />)

  return (
    <div>
      <h2>Task Lists</h2>
      {/* render formatted list of items on page: */}
      { list } 
    </div>
  )
}

export default List;
