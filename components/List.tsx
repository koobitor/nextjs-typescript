import * as React from 'react';
import ListItem from './ListItem';
import { User } from '../interfaces';
import { NextPage } from 'next';

type Props = {
  items: User[];
};

const List: NextPage<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
