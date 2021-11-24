import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChainId, DAppProvider, useEtherBalance, useEthers, Config } from '@usedapp/core';


const config  = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App /> {/* Wrap your app with the Provider */}
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

