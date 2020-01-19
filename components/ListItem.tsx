import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { User } from '../interfaces';

type Props = {
  data: User;
};

const ListItem: NextPage<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
