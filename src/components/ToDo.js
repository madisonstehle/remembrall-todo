import React from 'react';
import SettingsContext from '../SettingsContext.js';

import EntryForm from './EntryForm.js';
import List from './List.js';

function ToDo() {
  return (
    <SettingsContext.Provider>
      <EntryForm />
      <List />
    </SettingsContext.Provider>
  )
}

export default ToDo;
