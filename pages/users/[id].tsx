import * as React from 'react';
import { NextPage } from 'next';

import { User } from '../../interfaces';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import { sampleFetchWrapper } from '../../utils/sample-api';

type Props = {
  item?: User;
  errors?: string;
};

const InitialPropsDetail: NextPage<Props> = props => {
  const { item, errors } = props;
  if (errors) {
    return (
      <Layout title={`Error | Next.js + TypeScript Example`}>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

InitialPropsDetail.getInitialProps = async ({ query }) => {
  try {
    const { id } = query;
    const item = await sampleFetchWrapper(
      `http://localhost:3000/api/users/${Array.isArray(id) ? id[0] : id}`
    );
    if (item.statusCode == 404) {
      return { errors: item.message };
    } else {
      return { item };
    }
  } catch (err) {
    return { errors: err.message };
  }
};

export default InitialPropsDetail;
