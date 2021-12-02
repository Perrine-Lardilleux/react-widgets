import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

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

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
