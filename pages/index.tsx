import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import styled from 'styled-components';
import { Button } from 'antd';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Topic>Hello Next.js + TypeScript</Topic>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Button>Submit</Button>
    </Layout>
  );
};

export default IndexPage;

const Topic = styled.h1`
  color: red;
`;
