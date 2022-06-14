import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script src="https://www.paypal.com/sdk/js?client-id=AQ1WZ7ZKr_u3d3ZJGNji_xd25u-b-Yas4Ay24cW8MjNcBRbHeqFPftn2_CN1HNSEEU1Duxr42lDDXz-P&currency=USD"></script>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  )
}

export default MyApp
