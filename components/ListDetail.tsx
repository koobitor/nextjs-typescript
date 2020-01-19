import * as React from 'react';
import { NextPage } from 'next';
import { User } from '../interfaces';

type Props = {
  item: User;
};

const ListDetail: NextPage<Props> = ({ item: user }) => (
  <div>
    <h1>Detail from {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
