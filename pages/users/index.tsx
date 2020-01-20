import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

import Layout from '../../components/Layout';
import List from '../../components/List';
import { User } from '../../interfaces';
import { sampleFetchWrapper } from '../../utils/sample-api';

type Props = {
  items: User[];
  pathname: string;
};

const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

WithInitialProps.getInitialProps = async ({ pathname }) => {
  const items: User[] = await sampleFetchWrapper(
    `${process.env.API}/api/users`
  );
  return { items, pathname };
};

export default WithInitialProps;
