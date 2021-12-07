import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'is a front end javascript library',
  },
  {
    title: 'Why use React?',
    content: 'is a favorite JS Library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'you use react by creating components',
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'Shade of blue',
    value: 'blue'
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
